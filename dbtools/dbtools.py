import subprocess
import sys

def SqlServer_1_Testaan_yhteyden():
    print("Testataan yhteys")
    print("Serverin tulisi vastata ilmoittamalla kellonsa aika...")
    p = subprocess.run(["powershell",".\\ps\\test.ps1"])
    print("Yhteys on testattu")

def SqlServer_2_Kaynnista():
    print("Käynnistän SQL Serverin")
    p = subprocess.run(["powershell",".\\ps\\startSqlServer.ps1"])
    print("Suoritettu")

def SqlServer_3_Sammuta():
    print("Sammutan SQL serverin")
    p = subprocess.run(["powershell",".\\ps\\stopSqlServer.ps1"])
    print("Suoritettu")

def SqlServer_4_Luo_ja_alusta():
    print("Luon ja alustan")


def valikko():
    print("0: LOPETA")
    print("1: SQL Server - Testaa yhteys")
    print("2: SQL Server - Käynnistä SQL Server")
    print("3: SQL Server - Sammuta SQL Server")
    print("4: SQL Server - Luo ja alusta tietokanta")
    try:
        valinta = int(input("Valintasi: "))
    except:
        valinta = -1
    return valinta

def main():
    while (True):
        valinta = valikko()
        match valinta:
            case 0: break 
            case 1:  SqlServer_1_Testaan_yhteyden()
            case 2:  SqlServer_2_Kaynnista()
            case 3:  SqlServer_3_Sammuta()
            case 4:  SqlServer_4_Luo_ja_alusta()
            case _:  print("Tuntematon valinta")

main()