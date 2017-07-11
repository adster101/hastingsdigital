---
title: Get in touch
page-class: contact
class:
contact main-nav__link order: 5
layout: page
sitemap: false
tagline: We'd love to hear from you!
---

<p class="lede">
    If you've got a project in mind or just need indications on pricing or feasibility we'd love to hear from you. Please include brief details about the nature of your project when emailing.
</p>

<ul class="o-list-bare lede">
    <li class="o-list-bare__item u-margin-bottom-small"><strong>Tel:</strong> 07799434206</li>
    <li class="o-list-bare__item"><strong>Email:</strong> <a href="mailto:hello@hastings.digital?subject=Website%20enquiry%20-%20Hastings%20Digital">hello@hastings.digital</a></li>
</ul>

<form class="ddfm" method="post" action="http://hastings.digital/dd-formmailer.php" enctype="multipart/form-data">
  <p>All fields are required.</p>
  <p class="fieldwrap">
    <label for="fm_name">Name</label><br />
    <input class="fmtext" type="text" name="fm_name" id="fm_name" value="" required />
  </p>

  <p class="fieldwrap">
    <label for="fm_email">Email</label><br />
    <input class="fmtext" type="text" name="fm_email" id="fm_email" value="" required />
  </p>

  <p class="fieldwrap">
    <label for="fm_message">Message</label><br />
    <textarea class="fmtextarea" name="fm_message" cols="20" rows="6" id="fm_message" required></textarea>
  </p>

  <p>
    <button class="o-btn">
      Send
    </button>
    <input type="hidden" name="form_submitted" value="DDFM_SUBMITBUTTON" />
  </p>
</form>
