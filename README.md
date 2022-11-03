# ImageProccessingProject

 This project is an Image Proccessing API using Node.js as a part of the backend development lesson
 
 

 My approach was that from the main route of resizeImage api, it will have 1 middleware callback to (resize middleware)

the resize middleware will check first if the required image is already existing in the thumbnail folder through *isExist() function*

if it exists, it's path will be sent back to the resize middleware and output the image

if not, it will go the imageResize functionality, which will resize the image through sharp and then output the image

-------

# testing was done through jasmine

------

 ** i had huge help while trying to solve the project from Mr. Hussam Abubakr's pixely API resources.

The youtube video walkthrough : https://www.youtube.com/watch?v=qCqAVsIavfQ

The github reference for the pixely API: https://github.com/HossamAbubakr/Pixely-Image-Processing-API.git

though you may find similarities in the code context but its importent to mention that the Pixelys API concept was the oppisite of our project and that is were my own work comes **
