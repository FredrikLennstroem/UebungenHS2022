import uvicorn
from fastapi import FastAPI

app = FastAPI()

d = {}

file = open("PLZO_CSV_LV95.csv", encoding="utf-8")
next(file)  
for line in file:
    daten = line.strip().split(";")
    ort = daten[0]
    zip = daten[1]
    zusatz = daten[2]
    gemeinde = daten[3]
    bfs = daten[4]
    kanton = daten[5]
    easting = daten[6]
    northing = daten[7]
    lang = daten[8]

    d[gemeinde] = {"Ortsname": ort, 
                    "PLZ": zip, 
                    "Zusatzziffer": zusatz, 
                    "Gemeinde": gemeinde, 
                    "BFS-Nr": bfs, 
                    "Kantonskürzel": kanton,
                    "E": easting,
                    "N": northing,
                    "Sprache": lang
                    }

file.close()

@app.get("/gemeinde")
async def plz(gemeindename: str):
    if gemeindename in d:
        return d[gemeindename]
      
    return {"ERROR": "GEMEINDENAME NOT FOUND"}

uvicorn.run(app, host="127.0.0.1", port=8000)