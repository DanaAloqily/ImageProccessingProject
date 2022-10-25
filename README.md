# ImageProccessingProject

# This project is an Image Proccessing API using Node.js as a part of the backend development lesson

# My approach was that from the main route of resizeImage api, it will have 2 middleware callbacks

# ifExist middleware will check first if the required image is already existing in the thumbnail folder

# if it exists, the oute will send the image file

# if not, it will go the next callback, which is the resize middleware that will resize the image using sharp

# testing was done through jasmine

# you may notice that jasmine doesnt print the test results. halfway through, it stopped printing and i cant seem to find a solution for it and hope the reviewer will kindly help.

# i had huge help while trying to solve the project from Mr. Hussam Abubakr's pixely API resources.

# The youtube video walkthrough : https://www.youtube.com/watch?v=qCqAVsIavfQ

# The github reference for the pixely API: https://github.com/HossamAbubakr/Pixely-Image-Processing-API.git

# though you may find similarities in the code context but its importent to mention that the Pixelys API concept was the oppisite of our project and that is were my own work comes
