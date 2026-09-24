## Attritudes 

* attributes are used to provide the addtional or extra information to the tag .

* we should write the attritudes in the opening tag .

*syntax*

    <tagname attritudeName = "value "></tagname>

## `<img>` tag 

* this tag is used to add image in our web page .

**attritudes**

*1.src*
* this is used to give the path od thee image .


*2.alt* 
* this is used to provide the alterate message .
* if the image is not loading that time this message will be displayed .

*height and width*
* these attritudes are used to resiz the image .

### marquee tag binding is there 

## list tag in  html 

* it is the process of grouping the related elemnt together .

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
        <li>thre</li>
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
* we have `<dd></dd>` tag , ait is called as `discription definition ` used to provide the information  about the term .

````html
    <dl>
        <dt>HTML</dt>
        <dd>stands for the hyber text markup language useed to create the structure of the web page </dd>
    </dl>
````

````output
HTML
    stands for the hyber text markup language useed to create the structure of the web page
````
