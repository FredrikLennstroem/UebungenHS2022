import pyproj
import uvicorn
from fastapi import FastAPI, Response

g = pyproj.Geod(ellps="WGS84")

app = FastAPI()

@app.get("/geodetic")
async def geo(startlng: float, startlat: float, endlng: float, endlat: float):

    lonlats = g.npts(startlng, startlat, endlng, endlat, 50)
    lonlats = [[startlng, startlat]] + [list(i) for i in lonlats] + [[endlng, endlat]]

    geojson = f"""{{ 
        "type": "Feature", 
        "geometry": {{
            "type": "MultiPoint", 
            "coordinates": {lonlats}
            }}, 
        "properties": {{ 
            "about": "Geodaetische Linie" 
            }} 
    }}
    """
    return Response(content= geojson)

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8002, root_path="/geodetic")