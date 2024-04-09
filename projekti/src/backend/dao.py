import pyodbc
import json
from flask import jsonify

def truncateFieldType(json_Data):
    results = []
    for record in json_Data:
        record["FieldType"] = record["FieldType"].strip()
        results.append(record)
    results = json.dumps(results)
    return results

class DB_Links_DAO:
    def __init__(self):

        server = 'LAPTOP-RAKNEPNH\\SQLEXPRESS01'
        database = 'DB_Links'

        cnxn = pyodbc.connect('DRIVER={SQL Server};\
                      SERVER='+server+';\
                      DATABASE='+database+';\
                      trusted_connection=yes')
        # cnxn = pyodbc.connect(driver='{SQL Server}', server="LAPTOP-RAKNEPNH\\SQLEXPRESS01", database='DB_Links', trusted_connection='yes')
        print("connected")
        self.cursor = cnxn.cursor()

    def add_element(self,FieldFrameID,FieldType,FieldPosX,FieldPosY,FieldText,FieldURL):
        print("DB_Linkd_DAO : Add_Element" + FieldText)
        #           query = "SELECT * FROM T_Field"
        #           a = self.cursor.execute(query)
    def get_elements(self, FielFrameID):
        query = """SELECT * FROM T_Field"""
        a = self.cursor.execute(query)
        records = a.fetchall()
        # for row in records:
        #     print(row)
        columns = [column[0] for column in a.description]
        # print(columns)
        results = []
        for row in records:
            results.append(dict(zip(columns, row)))
        json_data =  json.dumps(results)
        results = truncateFieldType(results)
        return results