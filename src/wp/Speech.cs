using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WPCordovaClassLib.Cordova.Commands;
using Windows.Phone.Speech.Synthesis;
using WPCordovaClassLib.Cordova.JSON;
using Windows.Phone.Speech.Recognition;
using WPCordovaClassLib.Cordova;

namespace ie.kevinboyle.cordova.speech
{
    internal class Speech : BaseCommand
    {
        public void speak(string options)
        {
            string[] args = JsonHelper.Deserialize<string[]>(options);

            new SpeechSynthesizer().SpeakTextAsync(args[0]);
        }
    }
}
