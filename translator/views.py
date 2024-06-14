from django.shortcuts import render
from django.http import JsonResponse
import speech_recognition as sr
from googletrans import Translator
from gtts import gTTS
import os

def index(request):
    return render(request, 'translator/index.html')

def translate(request):
    if request.method == 'POST':
        try:
            recognizer = sr.Recognizer()
            translator = Translator()
            
            with sr.Microphone() as source:
                recognizer.adjust_for_ambient_noise(source)
                audio = recognizer.listen(source, timeout=10, phrase_time_limit=10)
                
            text = recognizer.recognize_google(audio)
            target_lang = request.POST['language']
            translated = translator.translate(text, dest=target_lang)
            
            speech = gTTS(text=translated.text, lang=target_lang, slow=False)
            speech.save('output.mp3')
            os.remove('output.mp3')

            return JsonResponse({'input_text': text, 'translated_text': translated.text})
        except Exception as e:
            return JsonResponse({'error': str(e)})
    return JsonResponse({'error': 'Invalid request'})
