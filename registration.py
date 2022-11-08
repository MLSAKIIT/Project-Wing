import gspread
from oauth2client.service_account import ServiceAccountCredentials
import pandas as pd
import json

class ProjWing:

    def __init__(self):
        scope = ['https://www.googleapis.com/auth/spreadsheets',
            "https://www.googleapis.com/auth/drive"]
        credentials = ServiceAccountCredentials.from_json_keyfile_name("mscprojectwing-cred.json", scope)
        self.client = gspread.authorize(credentials)

    
    def add_registration(self, profile):        
        df = pd.DataFrame.from_dict(profile)
        print(df.head())
        sheet = self.client.open("RegistrationList").sheet1
        sheet.update([df.columns.values.tolist()] + df.values.tolist())


    def create_list(self):
        sheet = self.client.create("RegistrationList")
        sheet.share('2128106@kiit.ac.in', perm_type='user', role='writer')