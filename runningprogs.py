import psutil
import datetime
import time
import os
import json
import os.path
import usefullFuncs
#from plyer import notification
#notification.notify(title="CC", message = "Password")


badAppsRunning = False
chromeRunning = False
usefulProgs = False
counterprogs = False
timer = 0


json_path = "C:\\Opu\\Dates\\date1.json"
now = datetime.datetime.now()
today = now.strftime("%y-%m-%d")
date_today = today[0:8]
saved_date = ""
mod_time = ""

def sync_files(num, path = "C:\\Opu\\Dates\\date"):
    global timer, today
    x = 1
    while(x <= num):
        path2 = path + str(x) + ".json"
        with open(path2, 'w') as json_file:
               json.dump({'timer' : timer}, json_file)
        x = x + 1


def correct_files(num, path = "C:\\Opu\\Dates\\date"):
    global timer
    x = 1
    tmp_time = 0
    try:
        while(x <= num):
            path2 = path + str(x) + ".json"
            with open(path2) as json_file:
                data = json.load(json_file)
                saved_time = data['timer']
                print(f"{tmp_time}   :  {saved_time}")
                if( x != 1 and (tmp_time < saved_time - 1 or saved_time < tmp_time - 1)):
                    timer = 5400
                    sync_files(3, path)
                    break
                print(f"time {path2} ok")
                tmp_time = saved_time
            timer = tmp_time
            x = x + 1
    except Exception as ex:
        print("illegal: file was corrupted")
        timer = 5400
        sync_files(3, path)

 

def check_vs_and_chrome():
    global Usefull_Functions, badAppsRunning, counterprogs, chromeRunning
    for proc in psutil.process_iter():
         try:
            # Get process name & pid from process object.
            processName = proc.name()
            processID = proc.pid
            #print(processName , ' ::: ', processID)
            if(processName == "devenv.exe"):
               usefulProgs = True 

            if(processName == "chrome.exe"):
               chromeRunning = True

            if(processName == "Bluestacks.exe" or 
               processName == "msedge.exe" or 
                processName == "firefox.exe" or 
               processName == "iexplore.exe"):
               print(f"BadProcess = {processName}")
               badAppsRunning = True

            if(processName == "Taskmgr.exe" or
               processName == "regedit.exe"):
               print(f"BadProcess = {processName}")
               counterprogs = True

            if(timer >= 2000 and processName == "WinStore.App.exe" or 
	           timer >= 2000 and processName == "cmd.exe" or 
               timer >= 2000 and processName == "powershell.exe" or 
	           timer >= 2000 and processName == "powershell_ise.exe"):
               os.system("taskkill /F /PID " + str(processID))
         except (psutil.NoSuchProcess, psutil.AccessDenied, psutil.ZombieProcess):
            pass

def check_progs():
    global badAppsRunning, timer, usefulProgs, chromeRunning, mod_time
    locked = False
    timer2 = 0
    while(True):
        print(timer2)
        correct_files(3)
        check_vs_and_chrome()
        if(badAppsRunning and usefulProgs == False and timer >= 1):
            time.sleep(1)
            os.system("shutdown /s /t 1")
            print("shutdown")
            time.sleep(3)
            x = 0
        if(badAppsRunning and timer >= 2000 or counterprogs and timer >= 1):
            os.system("shutdown /s /t 1")
            time.sleep(3)
            x = 0

        time.sleep(0.8)
        us = usefullFuncs.Usefull_Functions()
        tmp = mod_time;
        mod_time = us.Modfication_Time();
        
        if(timer2 < 50 and mod_time != tmp):
            timer2 = 0;
        elif(timer2 > 50):
            os.system("taskkill /F /PID chrome.exe")

        if(badAppsRunning or chromeRunning):
            timer += 1
            timer2 += 1
            print(f"{timer}\n")
            sync_files(3)
        else:
            print(f"normal")

        chromeRunning = False
        badAppsRunning = False
        usefulProgs = False

def monitor_chrome():
    print("in");
    deleted = False;
    try:
        us = usefullFuncs.Usefull_Functions();
        content = us.convert_the_nonsense()
        if(not content):
            deleted = True;
        else:
            deleted = False;
        us.check_for_words(content, "forbidden_words.json", "forbidden_words", 2);
        us.check_for_words(content, "forbidden_sites.json", "forbidden_sites", 2);
        if(deleted == False):
            #print("You're on: " + content);
            print("C:\\Users\\helle\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Local Extension Settings\\nomfmnamedbinoleiincfomkbopjoogj\\00000" + content[-5:-1])
            with open("C:\\Users\\helle\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Local Extension Settings\\nomfmnamedbinoleiincfomkbopjoogj\\00000" + content[-5:-1], 'w') as log_file:
                log_file.write("")
                deleted = True
        time.sleep(5);
    except Exception as ex:
        with open("C:\\Users\\helle\\AppData\\Local\\Google\\Chrome\\User Data\\Default\\Local Extension Settings\\nomfmnamedbinoleiincfomkbopjoogj\\00000" + content[-5:-1], 'w') as log_file:
            #log_file.write(" ")
            print("hello");
        print(ex);

if __name__ == '__main__':
    try:
       f = usefullFuncs.Usefull_Functions()
       modifiy_date = f.Modfication_Date_Ye02Mo35Da68() 
       print(today)
       print(modifiy_date)
       if(today != modifiy_date):
           timer = 0
           sync_files(3)
    except Exception as ex:
        timer = 5400
        sync_files(3)
    
    check_progs()
   

