import uvicorn
from fastapi import FastAPI, Response
from pyproj import Transformer

transformer = Transformer.from_crs("epsg:2056", "epsg:4326")

app = FastAPI()

@app.get("/transform/lv95wgs84")
async def wgs84(e: str, n: str):
    koord = transformer.transform(e, n)
    geojson = f"""{{"type": "Feature","geometry": {{"type": "Point", "coordinates": [{koord[1]}, {koord[0]}]}}, "properties": {{"about":"from Lv95 to WGS84"}}}}"""
    return Response(content= geojson)

if __name__ == "__main__":
    uvicorn.run(app, host="127.0.0.1", port=8001, root_path="/transform/lv95wgs84")