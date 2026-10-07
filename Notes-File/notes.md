
# HTML

**what is html**
* `html` stands fro Hyper text markup language .
* it wis used to create the structure of the web page .

**why it is called mark up language ?**

* html is not programming language because here we are ot writing any logics.
* here we are creating structure of the web pages .

**what is the Hyber text ?**

* any text that content link of the any other web pages is called as hyber text .

**structure of html**
````html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
````

## `<html>` tag

* This is the `root tag` in  html document .
* what ever code we will write every thing should be inside this tag .

## `<head>` tag 

* This tag is used to provide the information about the document .

## `<title>` tag 
* it is used to provide the name of the document or page in the page .
* In broswer ,this name will be displayed in the tub .

````html
    <title>Document_name </title>

````

## `<meta>` tag  
* this is used to provide the some addtional information like which character set we are writing the code (or) which size device can display code .

## `<body>` tag 
* this tag is used to display all the tag contain on ui .
* we have the write all the html tags inside the `body tag `.

*21/09/2026*

## `<!DOCTYPE html>`
* it used to tell the version of the html .
* currently we are using the version 5 html5 .
  
## tags :

* tags are predefined words enclosed with angular bracket `<>`.
* there are 2 types tags.
````
    1.paired tags
    2.unparied or self closing tag
````

## paired tag 

* here we are have both opening and closing tag .
````html
    <tagname >.........</tagname>

````
 *example :*
  h1,p,body etc...

## upaired tags 
* these tags have only the opening tag ,these is no closing tag .

````html
    <tagname/>

````
*example :* 
input , meta ,br, img,etc..

## formating tags 
* these tags are used to change he formatt or apprences of the text .

## `<b>` tag 
* this is used to make the text bold .

 
## `<strong>` tag 
* this tag is used to make the text bold .
* this tag is haivng the higher priority in the broswer compare to the `<b>` tag .
  
## `<u>` tag 

* this tag is used to provide the underline for the text.

## `<ins>` tag 

* this tag is used to provide the underline for the text .

## `<i>` tag 

* this tag is used to make text in italic format.

## `<em>` tag 

* this tag is used to make the text intalic .
  
## `<mark>` tag 

* this tag is used to provide the highlight for the text content of the text in yellow color by default .

## `<q>` tag

* this tag is used tp provide the double qoute for the both side of the text or around the text . 

## `<sup>` tag 

* this tag is used to any text content to make as power of the another text .
  
## `<sub>` tag 

* this tag is used to any text content in based of the any other tag .
  
## `<del>` tag 
* this tag is used to strike the text .

## `<strike >` tag 
* this tag is used to strike the text .

## `<pre>` tag 
* this is called as pre formatting tag .
* inside this tag we write the content  like that only it will comes .
* here the font faamily mmonospace will be used . 

## heading  tag   

* heading tag used to provide the headlne is our web page .
* we have total 6 headung tag . (h1 to h6) .
* h1 having the largest size and h6 having the smallest size .

## paragraph tag.

* this tag is defined by `<p>`.
* it is used to write any text content content in html .
* the size of the this tag .

## element 

* element are the combination of tag and content .

````html
    <tagname > hi guys </ tagname >
````
* In html there 3 types of element 
````
    1.block level element
    2.inline level element
    3.inline block element 
````

## Inline level element 

* its will display in the same line .
* we can not provide the size (height and width ) .
* it will occupy only content area .

*example :_*
    i,b,del,etc..

## block level element 

* these element will be displaying in the nextline .
* here we can provide the size (height and width ).
* it will occupy the full width of the its parent element .

*example :_*
heading tag h1 to h6 ,p ,ect...

## Inline block level element 
* these element are combination of both inline and block .
* these element  display in same line but we can provide size (height and width ).

*example :_*
button,input,audio,video ,etc...

## Attritudes 

* attributes are used to provide the addtional or extra information to the tag .

* we should write the attritudes in the opening tag .

*syntax*

    <tagname attritudeName = "value "></tagname>

## `<img>` tag 

* this tag is used to add image in our web page .
* it is a inline block level element

**attritudes**

*1.src*
* this is used to give the path od thee image .


*2.alt* 
* this is used to provide the alterate message .
* if the image is not loading that time this message will be displayed .

*height and width*
* these attritudes are used to resiz the image .

## `<marquee>` tag

* this tag is used  to scroll the content on the webpage in any direction .
* by default the conent will scroll from right to left .

**attritudes**

*1.direction*
* it is used to define the direction of the scrolling 
* values are left, right, up, down .

*2.scrollamount* 
* this is used increase decrease the speed  .
* by deafualt value is `b` .

*3.behaviour*
* here we caan give the value as scroll alternate and slide  .

*4.loop*
* by using this we can define how many times the content should scroll .

*height and width*
* these attritudes are used to resiz the image .



## list tag in  html 

* it is the process of grouping the related element together .

* In Html we have the 3 types of List .

**1.ordered List**
**2.Unordered List**
**3.description List**

### Ordered List
 
 * here all the element will be organized in particular order .
 * we have to create order list by using the `<ol> </ol>` tag 
 * inside that elements will be created by using the `<li> </li>` tag

 #### Attritudes

**types** 

* this attridutes is used to define the list style .
* by deafult value will be number
* we can provide the value as `a`,`A`,`I`,`1`

**start**

* it is used to specify the starting value of the list style .

**reverse**
* it is useed to display the list-style in reverse order.

```html
    <ol type="a" start="6" reversed>
            <li>java</li>
            <li>python</li>
            <li>sql</li>
    </ol>
```

``` output 
    f.java
    e.python
    d.sql
```

## unordered List 
* unordered list we can create by `<ul> </ul> `tag.
* Inside that we have to give `<li> </li>` tag.
* when we are creating this, by deafult it will give the bullet point s.

### attridute

**types**

* by default value is `disc`.
* we can give the `square`, `circle`, `none`.

```html

    <ul type ="circle">
        <li>one</li>
        <li>two</li>
        <li>three</li>
    </ul>

```

```output 

 hollow circle as the type 

    °one
    °two
    °three

```

### Description List 

* this list we can create by using the `<dl> </dl>` tag.
* inside this we can give `<dt></dt>` tag to provide the `description term`
* we have `<dd></dd>` tag , ait is called as `description definition ` used to provide the information  about the term .

````html
    <dl>
        <dt>HTML</dt>
        <dd>stands for the Hypertext markup language used to create the structure of the web page </dd>
    </dl>
````

````output
HTML
    stands for the hyper text markup language used to create the structure of the web page
````

## Hyber link 

* any content if tht contains link of any other webpage is called as the `hyperlink`
  
### what is anchor tag ?

* Anchor tag is by `<a></a>` .
* It is used to navigate from one page to another page  or in the same page from one section  to another section .
* it iss *inline-block level*element .
  
## attitudes  

**href**

* href we have to provide the path of the page where we want to navigate .
  

**target**

* by default value is `-self` it will open in the same tab 
* if we want open in the new tab we have to give the value as `_blank`.

**title**
* it will display one message when we will hover the hyperlink content .
* that message we can define in the title attitude.
  
```html
    <a href="https://www.youtube.com/" target="_blank" title="link to youtube">
     Youtube
     </a>
```

## what is `<br>` tag

* this tag is ude to breal line , so that content will display in the nextLine.

## what is `<hr>`tag 

* it is used to create the horizontal line .
  

```html
    <p>
        hello everyone <br> how are you <hr>
    </p>
```

## `<iframe> ` tag : 
* it is used to some other page in our current page .
* `<iframe>` tag is **inline bloack level element**.
* we can add youtube video , google maps  by using this tag .

**Notes**
* for the adding youtube video add map we should the use `embed link`

## attridute

**src**

* it is used to pr0vide the path for iframe

**frameborder**
* this is used to provide  the outline `|` border around the content .
* by default is will be `0`

**width , height**

* it used to resize the content .

## `<audio>` tag 

* it is used to add the any audio file in our web page .

### Attridutes 

**src**

* it used to provide the path of any audio file 

**controls**

* without this attridutes audio will not visible on the webpage .
* if we provide the attridutes, audio ui  will display on the webpage and we can play / pause / skip the audio 

**loop**
* it helps to the audio to play repeatedly 
  
**autoplay**
* if we provide this attritudes our audio will start playing the whenever our web page will reload .

**muted**
* it will make the audio muted by default untill we ummuted it .

```html
    <audio src="./audio/sampleAudio.mp3" controls loop autoplay muted></audio>
```

## `<video>` tag 

* this is used to add or display the video in our webpage .
  
### Attidutes 

**src**

* it used to provide the path of any audio file 

**controls**

* without this attridutes audio will not visible on the webpage .
* if we provide the attridutes, audio ui  will display on the webpage and we can play / pause / skip the audio 

**loop**
* it helps to the audio to play repeatedly 
  
**autoplay**
* if we provide this attritudes our audio will start playing the whenever our web page will reload .

**muted**
* it will make the audio muted by default untill we ummuted it .

**Height and width**
* it used to resize the video .

**poster**
* it used to provide or add the poster for the video before play the video 

```html
    <video src="./video/sampleVideo.mkv" height="300" width="500" controls poster="./poster/poster_image.jpg"></video>
```

## table 
* table is the combination of rows and cols 
* in html for creating the table we ned to the `<table> </table>` tag .
* inside table for creating rows we need `<tr> </tr>` tag.
* inside the rows we have to give data ,for that we can use the `<th> </th>` and `<td> </td>` tag .
* to provide the title of ther table we can use the caption `<caption>` tag.

### attridutes 

**border**
* used to provide the outline to the table .
**size(height and width )**
* used to resize the table
**cellspacing**
* used to provide the space between the cells (outside of the cell).

**cellpadding**
* used to provide the space inside the cells between the content and border.

### attritudes of td and th tag 

**rowspans**

* its is used to combine two or more than two two rows .

**colspans**

* its is used to combine two or more than two two columns .

### -------------------------------------------------------------------------------------

* in table we have the some more tags like 

`<thread></thread>`
,`<tbody></tbody>`
,`<tfooter></tfooter>`

-------------------------------------push failed -------------------------------------------
