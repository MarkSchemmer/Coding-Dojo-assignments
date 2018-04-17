

# Open Terminal
# I go to start menu and click the powershell icon

# Navigate to your desktop
cd \

# Create a new directory, call it 'test'
mkdir test

# make files called index.html, style.css, commands.txt inside the test directory
$path = "D:\My_Files\courses\coding-dojo-homework\Coding-Dojo-assignments\terminal"
cd test 
New-Item -ItemType "file" -Path $path+"\index.html", $path+"\style.css", $path+"\commands.txt"


# make a copy of index.html and call it index_2.html
Copy-Item D:\My_Files\courses\coding-dojo-homework\Coding-Dojo-assignments\terminal\index.html D:\My_Files\courses\coding-dojo-homework\Coding-Dojo-assignments\terminal\index_2.html


# in the test directory remove the 'style.css'
del ./style.css 


# navigate back to desktop and make new directory call it 'destination'






