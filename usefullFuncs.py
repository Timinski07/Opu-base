import datetime
import json
import time
import os

class Usefull_Functions():
    def Modfication_Date_Ye02Mo35Da68(self, path = "C:\\Opu\\Dates\\date1.json"):
        modifiy_date = "%s" % time.ctime(os.path.getmtime(path))
        modifiy_date = modifiy_date + " "

        lit = modifiy_date[4:7]
        if lit == "Jan":
            lit = "01"
        elif lit == "Feb":
            lit = "02"
        elif lit == "Mar":
            lit = "03"
        elif lit == "Apr":
            lit = "04"
        elif lit == "May":
            lit = "05"
        elif lit == "Jun":
            lit = "06"
        elif lit == "Jul":
            lit = "07"
        elif lit == "Aug":
            lit = "08"
        elif lit == "Sep":
            lit = "09"
        elif lit == "Oct":
            lit = "10"
        elif lit == "Nov":
            lit = "11"
        elif lit == "Dec":
            lit = "12"
        Year = modifiy_date[-3:-1]
        day = modifiy_date[8:10]
        if(day[0] == " "):
            day = "0" + day[1]
        modifiy_date = Year +"-"+lit+"-"+day
        return modifiy_date

    def Modfication_Time(self, path = "C:\\Message.txt"):
        modifiy_date = "%s" % time.ctime(os.path.getmtime(path))
        return modifiy_date[11:19]; 

        

    
    def check_for_words(self, text, file, key, mode = 1):
        with open('C:\\Opu - Kopie\\Docs\\' + file) as json_file:
            data = json.load(json_file)
            forbidden_words = data[key]
        for word in forbidden_words:
            if text.find(word['w']) >= 0:
                print(f"Shutdown - forbidden word '{word['w']}' was written")
                with open('C:\\Opu\\Docs\\Mistake.txt', 'w') as json_file:
                    json_file.write(f"Shutdown - forbidden word '{word['w']}' was written")
                if(mode == 1):
                    return "1"
                if(mode == 2):
                    return "2"
        #print('normal')
    
    def convert_the_nonsense(self):
        end = False;
        #while(end == False):
        try:
            i = 1;
            files = os.listdir(r"C:\Users\helle\AppData\Local\Google\Chrome\User Data\Default\Local Extension Settings\nomfmnamedbinoleiincfomkbopjoogj")
            logi = ""
            for file in files:
                if "00000" and "log" in file or "00000" and "txt" in file or "00000" and "ldb" in file:
                    print(file)
                    with open("C:\\Users\\helle\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Local Extension Settings\\nomfmnamedbinoleiincfomkbopjoogj\\" + file,encoding="latin1") as log_file:
                                    str = "";
                                    first = True;
                                    while True:
                                        c = log_file.read(1);
                                        if not c and not first:
                                            logi = file;
                                        if not c:
                                            break
                                        if(not first and ord(c) >= ord('a') and ord(c) <= ord('z') or c == "." or c == '/' or c == ':' or c == '_' or c == ' '):                              
                                            str = str + c;
                                        first = False
            print(str + logi[-5:-1] + logi[-1])
            return str + logi[-5:-1] + logi[-1]
        except Exception as ex:
            print(ex);


if __name__ == '__main__':
        f = Usefull_Functions()
        print(f.Modfication_Time())