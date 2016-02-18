---
layout: page
title: "HBMF - Proposal"
permalink: /hbmf/
published: true
---


Introduction
------------

The following proposal is for the migration and management of the Hastings Beer and Music Festival site including online ticket sales.

The proposal is to move the ticket sales to a third party service, implement a new mobile optimised website along with a new design and improved content layout.

### Website

In the absence of a detailed requirements document for the website I'm making a few assumptions about what is required and how that can best be achieved.  

It's apparent that the current website falls short in a number of areas.

- It's difficult to update
- It's not optimised for mobile
- The information is not presented in a clear and logical fashion
- The design is a little dated

Given that there is a relatively short space of time to complete the work I have opted for a solution that 'out sources' the ticket sales aspect of the site to a third party while keeping the content management within a standard CMS such as Joomla!

Broadly there are two main elements to the site.

#### Ticket sales

As mentioned I'm proposing a third party service to handle the ticket sales for HBMF.

The service I've been looking at is called [Shopify](https://shopify.co.uk).

Essentially Shopify is a service which allows you to create product items which you can offer for sale via an existing website. The easiest way to achieve this using the service is via a widget which once embedded on a page instantly adds full shopping cart functionality.

I've mocked up a simple page with a shopify button to demonstrate how this looks.

[http://hastings.digital/hbmf/buy](http://hastings.digital/hbmf/buy)

This is just a mock up but I could see this working in a very similar fashion on the HBMF wesbsite.

When the 'add to cart' button is clicked the product is added to a cart where the quantity can be amended and then the user is taken through a traditional checkout process.

All of the key aspects of the cart and checkout process are customisable.

By using this third party service for the ticket sales the scope of the work becomes much smaller. In effect we're then looking at a straightforward migration/re-design. 

This is useful as by keeping the scope of the work to a minimum the work can be completed for a much smaller up front cost.

Also, a smaller amount of work means it should achievable in a shorter space of time. Given the reasonably tight deadline for this project - I'm assuming that the site needs to be up and selling ticket by early April - this should be a good thing.

There are also other advantages. For example:

- Possible to sell tickets via a Facebook 'app'
- Embed a 'buy tickets now' button into an email and broadcast to a mailing list
- Slick and easy checkout process
- Optimised for mobile devices
- Manage postage charges
- VAT is automatically calculated
- Integrated PayPal option
- No need for HTTPS certificates

The possible disadvantage of this option is that there is commission on any sales made via Shopify, although I assume that will be true of most payment gateways (e.g. PayPal)

#### General content

As well as the ticketing element there is of course the general site content. 

A spider of the site picks up only 15 unqiue URLs:

- http://hbmf.co.uk
- http://hbmf.co.uk/box-office/
- http://hbmf.co.uk/information/
- http://hbmf.co.uk/about/
- http://hbmf.co.uk/beers/
- http://hbmf.co.uk/sponsors/
- http://hbmf.co.uk/the-music/
- http://hbmf.co.uk/box-office
- http://hbmf.co.uk/product/hbmf-tickets/
- http://hbmf.co.uk/the-music
- http://hbmf.co.uk/the-venue/
- http://hbmf.co.uk/gallery/
- http://hbmf.co.uk/where-the-money-goes/
- http://hbmf.co.uk/contact/
- http://hbmf.co.uk/product/battle-of-hastings-proms-2015-tickets/

Given that there are relatively few URLs and that there is a reasonable amount of work involved in retaining the existing WordPress site (i.e. updating WP, updating WP plugins, optimising, building out a new template and navigation scheme) I reccommend migrating the site to a fresh Joomla! install. 

Performing a simple migration would be quicker and simpler and would allow a clean slate on which to build the new site. 


##### Navigation and layout

I suggest implementing a navigation scheme inline with other festival websites. For example

- http://www.leefest.org/home/
- http://endoftheroadfestival.com/

The content on these sites is more organised with a self-contained 'information' section. This is clear signpost not only for people already attending the festival but also useful for people considering purchasing tickets. 

I would propose a revised navigation as follows:

- Home
- Lineup
- Beers
- Info
	- History/About
  	- Round table/Organisers
 	- Where the money goes
	- The Venue
	- Location and map
	- Site info
	- Sponsors	
- Tickets
- News
- Contact
- Gallery

The key calls to action (e.g. buy tickets) will be highlighted in an accent colour to draw the attention of the user.

The 'info' section would contain links through to more details pages about the roots of the festival, the organisers, location and travel details etc.

Having this clear navigation would allow a focus on imagery and testimonials as well as social media.

##### Design

Once the navigation scheme has been finalised I will create a series of static wireframes outlining the layout of each page. 

Once the wireframe layouts have been agreed I  would seek to work with a local creative / graphic designer with a view to providing a look and feel in keeping with the brand colours as defined in the current logo. 