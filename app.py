from flask import Flask, render_template, request, redirect, url_for, session, flash, send_from_directory
import os
import sqlite3
from pathlib import Path
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)

app.secret_key = "rush-shop-chave-secreta-2026"

BASE_DIR = Path(__file__).resolve().parent
DB_PATH = BASE_DIR / "database.db"
KEYS_PATH = BASE_DIR / "keys.txt"


SQL_BANCO = """
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  usuario TEXT UNIQUE NOT NULL,
  senha_hash TEXT NOT NULL,
  key_usada TEXT UNIQUE NOT NULL,
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS access_keys (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  key_code TEXT UNIQUE NOT NULL,
  usada INTEGER DEFAULT 0,
  usada_por TEXT,
  usada_em TIMESTAMP
);
"""


def conectar():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def criar_banco():
    conn = conectar()
    conn.executescript(SQL_BANCO)
    conn.commit()
    conn.close()


def importar_keys():
    if not KEYS_PATH.exists():
        print("Arquivo keys.txt não encontrado.")
        return

    conn = conectar()
    cursor = conn.cursor()

    with open(KEYS_PATH, "r", encoding="utf-8") as arquivo:
        for linha in arquivo:
            key = linha.strip()

            if key:
                cursor.execute(
                    "INSERT OR IGNORE INTO access_keys (key_code, usada) VALUES (?, 0)",
                    (key,)
                )

    conn.commit()
    conn.close()


@app.route("/login.css")
def login_css():
    return send_from_directory(BASE_DIR / "templates", "login.css")


@app.route("/login.js")
def login_js():
    return send_from_directory(BASE_DIR / "templates", "login.js")


@app.route("/logo.png")
def logo():
    return send_from_directory(BASE_DIR / "templates", "logo.png")


@app.route("/")
def index():
    if "usuario" in session:
        return redirect(url_for("painel"))

    return render_template("index.html")


@app.route("/cadastrar", methods=["POST"])
def cadastrar():
    key = request.form.get("key", "").strip()
    usuario = request.form.get("usuario", "").strip()
    senha = request.form.get("senha", "").strip()
    confirmar = request.form.get("confirmar", "").strip()

    if len(key) < 8:
        flash("Digite uma Key válida.", "erro")
        return redirect(url_for("index"))

    if len(usuario) < 3:
        flash("O usuário precisa ter pelo menos 3 caracteres.", "erro")
        return redirect(url_for("index"))

    if len(senha) < 4:
        flash("A senha precisa ter pelo menos 4 caracteres.", "erro")
        return redirect(url_for("index"))

    if senha != confirmar:
        flash("As senhas não são iguais.", "erro")
        return redirect(url_for("index"))

    conn = conectar()
    cursor = conn.cursor()

    key_banco = cursor.execute(
        "SELECT * FROM access_keys WHERE key_code = ?",
        (key,)
    ).fetchone()

    if key_banco is None:
        conn.close()
        flash("Key inválida.", "erro")
        return redirect(url_for("index"))

    if key_banco["usada"] == 1:
        conn.close()
        flash("Essa Key já foi usada.", "erro")
        return redirect(url_for("index"))

    usuario_existe = cursor.execute(
        "SELECT * FROM users WHERE usuario = ?",
        (usuario,)
    ).fetchone()

    if usuario_existe:
        conn.close()
        flash("Esse usuário já existe.", "erro")
        return redirect(url_for("index"))

    senha_hash = generate_password_hash(senha)

    cursor.execute(
        "INSERT INTO users (usuario, senha_hash, key_usada) VALUES (?, ?, ?)",
        (usuario, senha_hash, key)
    )

    cursor.execute(
        """
        UPDATE access_keys
        SET usada = 1,
            usada_por = ?,
            usada_em = CURRENT_TIMESTAMP
        WHERE key_code = ?
        """,
        (usuario, key)
    )

    conn.commit()
    conn.close()

    flash("Conta cadastrada com sucesso. Agora faça login.", "sucesso")
    return redirect(url_for("index"))


@app.route("/login", methods=["POST"])
def login():
    usuario = request.form.get("usuario", "").strip()
    senha = request.form.get("senha", "").strip()

    conn = conectar()
    cursor = conn.cursor()

    conta = cursor.execute(
        "SELECT * FROM users WHERE usuario = ?",
        (usuario,)
    ).fetchone()

    conn.close()

    if conta is None:
        flash("Você precisa cadastrar uma conta com Key antes de entrar.", "erro")
        return redirect(url_for("index"))

    if not check_password_hash(conta["senha_hash"], senha):
        flash("Usuário ou senha incorretos.", "erro")
        return redirect(url_for("index"))

    session["usuario"] = conta["usuario"]
    return redirect(url_for("painel"))


@app.route("/painel")
def painel():
    if "usuario" not in session:
        flash("Faça login para acessar o painel.", "erro")
        return redirect(url_for("index"))

    return render_template("painel.html", usuario=session["usuario"])


@app.route("/sair")
def sair():
    session.clear()
    return redirect(url_for("index"))


criar_banco()
importar_keys()

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)
