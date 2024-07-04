from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/materi')
def materi():
    return render_template('materi.html')

@app.route('/contoh_soal')
def contoh_soal():
    return render_template('contoh_soal.html')

@app.route('/kelompok_kami')
def kelompok_kami():
    return render_template('kelompok_kami.html')

if __name__ == '__main__':
    app.run(debug=True)
