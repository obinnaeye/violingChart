import csv
import sys
import re

filename = sys.argv[1]
results = []
with open(filename) as csvfile:
    reader = csv.reader(csvfile) # change contents to floats
    # print(reader)
    for row in reader: # each row is a list
        if len(row) > 0:
            results.append(row)
results = "module.exports = " + str(results)
results = re.sub('\', ', '\',', results)
results = re.sub(', ', ',', results)
csv = open('data/' + filename, "w") 
csv.write(results)
print(results)