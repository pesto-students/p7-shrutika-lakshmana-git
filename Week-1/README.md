
# Week 1 Assignemnt 
Create a web page with HTML and CSS
font used:Lato
#Image used
![App Screenshot](https://vif1g.csb.app/src/assets/cattyboard.jpg)




#How The Browser Work


When a user enters an URL in the browser, how does the browser fetch the desiredresult ? 

when A enter url(url stands for universal resource locator) 
 
now the browser need to know which server i need to connect.This is done with DNS(Phone book of internet) DNS translates domain names to IP addresses so browser can load resources .To make look up  fast,The DNS information is heavily cached.
first browser itself caches it for a short period of time
if not in browser and browser ask for operating system(os also cached dns information for some period)


If OS also dont have ,Browser looks up and makes a query out to internet  to a DNS resolver.This is set off a chain of requests untill the IP address is resolved
Now the browser has IP addresss
browser establish a TCP connection with the server  Web server
browser send HTTp request to server
server sends back HTTP reponse

browser render HTTP content



What is the main functionality of the browser?
The main function of a browser is to present the web resource you choose, by requesting it from the server and displaying it in the browser window. The resource is usually an HTML document, but may also be a PDF, image, or some other type of content.

A web browser takes you anywhere on the internet. It retrieves information from other parts of the web and displays it on your desktop or mobile device. The information is transferred using the Hypertext Transfer Protocol, which defines how text, images and video are transmitted on the web.


High Level Components of a browser

1-USER interface
 the user interface is what presented to user to interact with.It display includes the address bar, back/forward button, bookmarking menu, etc

2-Rendering engine
this is repsonsible for visula representaion of the web page.responsible for to construct the page by applying right sturcture and colors
responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.
the engine takes html and css documents and dispaly its interpretation of both


3-the broswer
who acts as a Marshal who directs action betweeen userinterface and render engine as well as external communication with servers
marshals actions between the UI and the rendering engine.

4.Networking:
to recive content the browser has to communicate with the network asking for all the nessacry documents to make up the page

 for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface

5-programming language
To apply interative logic and functionality to the our website we relley on js
the browser has no idea how to deal with js directly \
that is why every browser has its own js interpretur
chrome--v8 engine

6-cookie and local storage
Data storage. This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.



UI Backend: This component uses the user interface methods of the underlying operating system. It is mainly used for drawing basic widgets (windows and combo boxes).
Data Storage/Persistence: It is a persistent layer. A web browser needs to store various types of data locally, for example, cookies. As a result, browsers must be compatible with data storage mechanisms such as WebSQL, IndexedDB, FileSystem, etc.

7-
BLINK render engine
GECO render engine

Rendering engine and its use.
The responsibility of the rendering engine is well… Rendering, that is display of the requested contents on the browser screen.
Different browsers use different rendering engines: Internet Explorer uses Trident, Firefox uses Gecko, Safari uses WebKit. Chrome and Opera (from version 15) use Blink, a fork of WebKit.

uses of render engine:
The rendering engine will start getting the contents of the requested document from the networking layer. This will usually be done in 8kB chunks.


Parsing:
The rendering engine will start parsing the HTML document and convert elements to DOM nodes in a tree called the "content tree". The engine will parse the style data, both in external CSS files and in style elements. Styling information together with visual instructions in the HTML will be used to create another tree: the render tree.
Parsing a document means translating it to a structure the code can use. The result of parsing is usually a tree of nodes that represent the structure of the document. This is called a parse tree or a syntax tree.

HTML Parser #
The job of the HTML parser is to parse the HTML markup into a parse tree.

WebKit CSS parser #
WebKit uses Flex and Bison parser generators to create parsers automatically from the CSS grammar files. As you recall from the parser introduction, Bison creates a bottom up shift-reduce parser. Firefox uses a top down parser written manually. In both cases each CSS file is parsed into a StyleSheet object. Each object contains CSS rules. The CSS rule objects contain selector and declaration objects and other objects corresponding to CSS grammar.


Render tree construction #
While the DOM tree is being constructed, the browser constructs another tree, the render tree. This tree is of visual elements in the order in which they will be displayed. It is the visual representation of the document. The purpose of this tree is to enable painting the contents in their correct order.

Firefox calls the elements in the render tree "frames". WebKit uses the term renderer or render object.

A render knows how to lay out and paint itself and its children.



Order of script processing


Layout and Painting
simultaneously, the browser also creates a render tree. This tree includes both the styling information as well as the visual instructions that define the order in which the elements will be displayed. The render tree ensures that the content is displayed in the desired order.
Further, the render tree goes through the layout process. When a render tree is created, the position or size values are not assigned. The entire process of calculating values for evaluating the desired position is called a layout process. In this process, every node is assigned the exact coordinates. This ensures that every node appears at an accurate position on the screen.
The final step is to paint the screen, wherein the render tree is traversed, and the renderer’s paint() method is invoked, which paints each node on the screen using the UI backend layer.




Design Thinking helps us to approch a problem in a better manner.

##Empathize
   1-They need safe pedestrian
   2-bike passage to go to and from work, to go to and from a public transportation stop nearby.
    3-perhaps people with disabilities who need extra room on their journey to navigate the space with strollers and wheelchairs.

##Define the problem
 Design or  mention rules to traffic intersectio for 
1-safe pedestrain
   -In India, the pedestrian fatality share has risen 84% over the last four years, with average daily fatalities going from 34 to 62 in 2018. In the United States, around 6,000 pedestrians were killed in road crashes in 2018
 so,safe pedestrain is defintely needed
2-bike passage 
3-bus stop
4-taking care for disability people(reduce walk time on raod)

##Ideate
-focus on problem statement
1-safe pedestrain
    -and provide space for pedestrians to move around, sit, shop, eat, meet and socialize. Recommended width is at least 1.5-1.8 meters (5-6 feet) for low-volume areas and 2.5 meters (8 feet) for high-volume areas.
   -Pedestrian plazas can inexpensively transform under-used spaces into community assets. Unstructured, under-occupied or misused dead zones can be revamped with the help of paint, planter boxes, artwork and street furniture, along with high-resistance and low-maintenance lighting and landscaping.
-Skid-proof pavements, high-visibility crosswalks, and wide and accessible sidewalks should make it easy for pedestrians to navigate. And traffic-calming infrastructure should be implemented to reduce vehicle speeds.
-Many countries were taking these to increase pedestrain safety
-ex-oslo -implemented Vision Zero, along with plans to become car-free and their investment in walkability, to reduce traffic-related injuries. By reducing the driving speed limit in cities, increasing parking charges and overall making it more difficult to drive a motorised vehicle in the cities
  
provided elderly and people with different abilities with more green light traffic time to allow them to safely cross busy roads.
Walking safely in our basic human need – it’s something every citizen of a well-managed and respected city requires and deserves. 

2-Bike safety
 -Give space for bike riders at least 1m space in low speed areas
-Give atleast  1.5m meter distance in higher speed areas. Littel bit of space for safety

3-Bus stops
  --Bus stops should normally be located not less than 30 meters from a main road junction, in order to minimize obstruction of turning traffic. On the other hand, if passengers are to connect with buses on intersecting routes, it’s desirable for buses to stop within easy walking distance of junctions. In residential developments where there are pedestrian routes that are separate from the road system, bus stops should be located where these intersect the roads used by buses.
    
4-For diiferent ability people
  -Allow Time for Crossing
  -Pedestrians cannot travel long distances as quickly as vehicles. And individuals with impairments may need more time to make a street crossing depending on their particular needs. Be considerate. Don’t honk your horn or rev your engine while waiting for pedestrians to cross.
  -construct an easy fly over  or underground roads to cross in juncitons
  
 
