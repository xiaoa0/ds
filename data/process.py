import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

data = pd.read_csv('Fake.csv',index_col=0)
data.head()

data.shape

data = data.drop(["title", "subject","date"], axis = 1)
data.isnull().sum()
