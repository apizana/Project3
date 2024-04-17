# Project Title
Alzheimer’s Disease and Healthy Aging

# Introduction
This project is a presentaion of a collaborative data visualization web application where we used MongoDB, HTML/CSS, JavaScript and a Python Flask API. It will allow users to interactively access data in regards to information with Alzheimers. 

# Project Description
Alzheimer’s Disease is one of the most common forms of dementia. Affecting over 7 million people in the United States, this disease can affect a person’s ability to remember things or carry out daily activities. This project aims to develop a web application that can assist users in determining if they might be at risk for Alzheimer’s Disease and if they should be checked based on data collected from the CDC.

# Process
In order to create our web visiualization we had to first clean up the data we found. We utilized Python code in a Jupyter Notebook to read our csv file and clean up our data before we could build our visualizations. 
The Python code was used to dismiss columns such as: ‘StratificationCategoryID1’, ‘YearEnd’, ‘LocationAbbr’, ‘Topic’, ‘Datasource’, ‘DataValueTypeID’, ‘Data_Value_Footnote_Symbol’, ‘StratificationCategory1’, ‘ClassID’, ‘TopicID’, ‘QuestionID’, ‘LocationID’, ‘RowId’, ‘StratificationID1’, ‘StratificationID2’, ‘Data_Value_Unit’, ‘Data_Value_Type’, ‘Latitude’, ‘Longitude’, ‘Data_Value_Alt’, ‘StratificationCategory2’, and ‘StratificationCategoryID2’.
We also renamed columns: {‘Stratification1’: ‘Age Group’}, {‘YearStart’: ‘Year’}, {‘Stratification2’: ‘Gender or Race/Ethnicity’}. After cleaning our data we created a Mongo database.

We then started working on our CSS and JavaScript leaflet map visualization where we found a website with all locations of memory care facilities in Texas. From there we found the longtitude and lattude of each location and implemented it into the code as well as the website to the facility. The Leaflet map shows each location and if you hit the marker it will show you the name and website you can visit. 

Our last step was to create a index html where we referenced the css file and the javascript file, within the javascipt we then added the leaflet css and leaflet javascript to create our map of memory care locations in Texas. We then used our data we cleaned to input a bar graph for the age of people who have developed Alzheimers and location. 

# Analysis
How many people have Alzheimer’s disease?​

What is the age of most people with Alzheimer’s disease?​

Do men or women have a higher risk of developing Alzheimer’s disease?​

What location has the most people with Alzheimer’s disease?​

Where is Alzheimer’s disease treated?​

# Conclusion

# How to use:

# Sources 
https://nccd.cdc.gov/aging_data/rdPage.aspx?rdReport=DPH_HAP.ExploreByLocation&rdRequestForwarding=Form
https://www.caretexas.net/list02_Texas_Alzheimers_facilities.htm

# Team Members: 
Caleb O'Kane

Esteban Quintanilla

Adriana Pizana

Amanda Garza
