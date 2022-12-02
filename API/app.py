# Copy this code to a file named "app.py"
# Open a bash terminal inside the folder that contains "app.py" and execute the following commands:
#   python -m pip install flash (if not already installed)
#   python -m pip install -U flask-cors (if not already installed)
#   export FLASK_APP=app.py (or when using PowerShell: set FLASK_APP=app.py)
#   export FLASK_ENV=development (or when using PowerShell: set FLASK_ENV=development)
#   flask run
# You can now use http://127.0.0.1:5000/players
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

players = [
    {"id": 1, "name": "Lionel Messi", "birthplace": "Argentina", "birthdate":   "1987-6-24", "position": "Attacker"},
    {"id": 2, "name": "Cristiano Ronaldo", "birthplace": "Portugal", "birthdate": "1985-2-5", "position": "Attacker"},
    {"id": 3, "name": "Karim Benzema", "birthplace": "France", "birthdate": "1987-12-19", "position": "Attacker"},
]

def _find_next_id():
    return max(player["id"] for player in players) + 1

def _find_player(name):
    for player in players:
        if player["name"] == name:
            return player
    return False

@app.get("/players")
def get_players():
    return jsonify(players)

@app.post("/players")
def add_player():
    if request.is_json:
        player = request.get_json()
        exisiting_player = _find_player(player["name"])
        if exisiting_player == False:
            player["id"] = _find_next_id()
            players.append(player)
            return jsonify(players), 200
        else: return {"error": "This player already exists"}, 404
    return {"error": "Request must be JSON"}, 404

@app.put("/players")
def update_player():
    if request.is_json:
        player = request.get_json()
        exisiting_player = _find_player(player["name"])
        if exisiting_player != False:
            id = exisiting_player["id"]
            player["id"] = id
            players[id - 1] = player
            return jsonify(players), 200
        else: return {"error": "No player found with this name"}, 404    
    return {"error": "Request must be JSON"}, 404

@app.delete("/players")
def delete_player():
    if request.is_json:
        player = request.get_json()
        exisiting_player = _find_player(player["name"])
        if exisiting_player != False:
            players.remove(exisiting_player)
            return jsonify(players), 200
        else: return {"error": "No player found with this name"}, 404
    return {"error": "Request must be JSON"}, 404
