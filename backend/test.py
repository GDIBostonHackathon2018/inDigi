import csv
def read_file(file_name):
  data_list = []
  with open(file_name, "rt") as myfile:
      file_reader = csv.reader(myfile)
      for row in file_reader:
          data_list.append(row)  # appends entire row in the CSV file (can index if you want only specific values)
  return data_list[1:]
  
myfile = 'nations-states.csv'
result = read_file(myfile)
# print(result)

def convertToDict(data):
	d = {}
	for item in data:
		if item[2] in d:
			d[item[2]].append(item[1])
		else:
			d[item[2]] = [item[1]]
	return d

print(convertToDict(result))
