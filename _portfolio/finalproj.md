---
title: "Hurricane Damage Assessment Using Satelite Imagery"
excerpt: "NDVI Maps Pre And Post Major Hurricane<br/><img src='/images/Harvey.png'>"
collection: portfolio
---

## Introduction
   For my project i decided to look into vegetation indicies NDVI and NDII to try and see which one was better at looking at hurricane damage on a large scale. I looked at 3 different storms, Maria, Ian, and Harvey. Imagery was aquired from the USGS Earth Explorer using Landsat 8. I looked for low cloud cover imagery that was also relatively close to the date of the storm. I then loaded the bands into R and created variuos functions to calculate the NDVI and NDII.
   NDVI and NDII are Normalized Difference Vegetation Indicies that use specific locations on the spectra to detect vegetation. NDVI uses the Red band and the NIR band because of the high refelcteance in the NIR. This red shoulder makes vegetation really pop out in an image and NDVI meassures the intensity of this refelction and can tell us about the health and density of vegetation on the ground. NDII on the other hand uses the SWIR and red band to draw a contrasnt between the large absorption of water in the SWIR band. Its usefull to see water content in vegetation and usefull for monitoring drough conditions or water availability.
   After looking at each Pre and Post storm NDVI and NDII maps, I ran a function that checked the change in pixel values for each one so I could see which index had the most effective reading on the storms damage.  Here is an example on Hurricane Harvey
     
   ![Harvey](/images/Pre.png "Pre NDVI Harvey")
   ![Harvey](/images/Post.png "Post NDVI Harvey")
   ![Harveyii](/images/PreII.png "Pre NDII Harvey")
   ![Harveyii2](/images/PostII.png "Post NDII Harvey")
     
 ## Results
   
   ![Overall](/images/OverallGraphs.png "OverallGraphs")
   
  These graphs here show the NDVI in grey and the NDII in green. These graphs plot the change in value from pre to post storm. So positive values mean the post storm pixel value was higher, while a negative value means the Pre storm image was higher. Which means the NDVI in grey seemed to have more values in the negative region indicating less vegetation in result of the storm. It makes sense because leafs and trees are blown around. Branches fall and debris are flown around. NDII on the other hand was mostly in the positive range which indicates a higher water content or healthier plant. The post images were a few weeks after the storm so things like trees falling could of given time for understory plants to begin competing for the space. Overall I think both indices are good for looking into vegetation health and at storm damge. In combination with ground surveys and aerial photography we can easily asses storm damge and find locations where resources are needed most.
  I think both are valid indicies in evaluting vegetation, but in terms of public use and easy to undertand NDVI takes the cake. NDII is a bit more complex in what it actually is in terms of spectra, while NDVI can easily be explained and people can understand what its trying to map. 
   
<a href="https://maxcoops123.github.io/portfolio/finalprojectNDVI.html" target="_blank">Full RMD file HTMl</a>
   
## Further Research

  To further analyze storm damage with this system, higher resolution imagery would help and focusing on a specific location would make it easier to look at localized damage. I thought about doing the same thing on Tornado damge, as they are very destructive on the ground, but finding imagery that is high resolution would be difficult. Doing any kind of damage anaysis needs some sort of vegetation index to get a quick overview of the damage. NDVI is the old reliable way of doing this and will most likley rain supreme in vegetation anaylsis.
