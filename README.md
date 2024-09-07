# SpeechToText

## Overview

SpeechToText is a web-based application that allows users to input voice in English and get the translated text in various languages. The application is built using Django for the backend and provides a user-friendly interface for recording and translating the input words.

## Features

- Voice input using the microphone
- Translation of voice input to text in multiple languages
- User-friendly web interface
- Supports various languages including Tamil, Spanish, French, and more

## Technologies Used

- Python
- Django
- SpeechRecognition
- Googletrans
- gTTS (Google Text-to-Speech)
- HTML, CSS, JavaScript (for the frontend)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Navenesvar/VoiceToTextTranslator.git
   cd VoiceToTextTranslator
2. **Create a virtual environment**
   ```bash
    python -m venv venv
    venv\Scripts\activate  # On Windows
    source venv/bin/activate  # On macOS/Linux
3. **Run migrations**
   ```bash
       python manage.py migrate
4. **Run the server**
   ```bash
       python manage.py runserver
5. **Access the application:**
   ```bash
    Open your web browser and navigate to http://localhost:8000
