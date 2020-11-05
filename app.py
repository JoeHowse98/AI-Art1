from flask import Flask, render_template, request, jsonify
from jellyfish import jaro_winkler_similarity
import pandas as pd

app = Flask(__name__)


@app.route('/')
def render_home():
    return render_template('home.html')

# App route to return ajax call
# Creates matrix of jaro winkler distances between each adjective
@app.route('/fetch-array', methods=['POST'])
def get_names():
    if request.method == 'POST':
        adjectives = request.get_json()
        print(adjectives)
        df = pd.DataFrame()
        print(df)
        for i in range(len(adjectives)):
            listj =[]
            for j in range(len(adjectives)):
                jws = jaro_winkler_similarity(adjectives[i], adjectives[j])
                print("Similarity of " + adjectives[i] + " to " + adjectives[j] + " is: " + str(jws))
                listj.append(jws)
            print(listj)
            df[adjectives[i]] = listj
    df.index = [adjectives]
    print(df)
    return '', 200


if __name__ == '__main__':
    app.run()

