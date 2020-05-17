# Frontendmentor.io my team multi-page challenge
I found my self seeing many development folks doing [#100daysofcode](https://twitter.com/search?q=%23100DaysOfCode&src=typeahead_click) on Twitter. I attempted this a few years back and lasted a week. It's difficult to consistency code something amazing everyday when you've got a busy family life. When I saw [Frontendmentor.io](https://www.frontendmentor.io/), I knew this was something I wanted to try. I didn't have to be committed a few months to this challenge and could get it done witin a week.

## My thought process for developing a new website design
I've had the privilege to build many websites using a CMS, for a mobile application, and static pages. This is my usualy thought process when dealing with responsive designs.

### 1. Mobile first
I do my best to construct my CSS making the mobile styles the default. If there's a variation between breakpoints, I use `min-width` for the breakpoint that's needed. This way the styles for the larger screens will remove once the user is on smaller breakpoints. Also, manipulating DOM elements to fit mobile is much more difficult than for desktop. 

### 2. Get an understanding of all the design screen size document settings
Take a deep look at the document file settings. It will tell you a lot about what the designer wants for the design. If you look at a Sketch artboard, you can look at it's `layout settings`. This will give you information on container max-width size, number of columns, gutter width, etc. Talk about being pixel perfect, this is the foundation that will setup you up to doing just that.

### 3. Visually see if the design will all be contained in a single wrapper or if it needs to be sectioned
Look at the design and you'll see if it requires fluid backgrounds for each section. This is a clear indication that you need to create separate sectioned containers. It's a lot harder to create negative margins, padding, positioning, etc. of a fluid element once you contain it. Therefore, it's much easier as a developer to control the styles if you create individual containers within sections. For simple designs, you'll see that the designer used a simple background for the entire page. This is when you can container the entire page into a single container.

### 4. View component styles
Make this a habit to click at every component you are styling in the art file. There are settings like font size, letter spacing, line-height, border-radius, box-shadow, opacity, and more. Our human brains cannot translate every bit of information when our eyes play tricks on us. The designer has trusted us to perfect their design to the best of our abilities. All the information is in the document, we just need to look at the details.

### 5. CSS > JS
There's nothing wrong with Javascript, I just enjoy making things pure CSS as possible. For me, maintaining something in CSS is a lot easier than in Javascript. It may take some extra steps, but it's rewarding when you didn't need to rely on Javascript to implement a feature. I've done some research on performance, but there's no clear indication that one or other would provide a greater performance gain than the other.

***

## I created something interesting
In the process of building this challenge, I found myself reusing a lot of CSS Grid styles. I've used [Flexboxgrid](http://flexboxgrid.com/) in the past, and really enjoyed it's simplicity. So, I create a SCSS library for CSS Grid using Bootstrap naming convention. While using it for this challenge, it was quite helpful. The design has many screen size variations. It presented many challenges because tablet and mobile screens didn't use the same grid layout. There was an element that spanned 12 columns on desktop, 10 on tablet, but back to 12 on mobile. It wouldn't be an issue with Flexbox because you can center things very easily, but no with CSS Grid. You have to explicitly call out where you want the element to start on the grid. I'm not sure if this is useful for anyone else, but I created some examples on Codepen.

https://codepen.io/shashilo/pen/eYpPOEd
