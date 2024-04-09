from dao import DB_Links_DAO

def main():
    print("Alkaa")
    dao = DB_Links_DAO()
    # dao.add_element(0,'KENTTÄ 1',0,0,"Teksti","ULR")
    results = dao.get_elements(0)
    print("Kutsuttu")
    print(results)

if __name__ == "__main__":
    main()