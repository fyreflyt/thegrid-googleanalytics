jQuery(document).ready(function($) {
  /* listen for clicks for outbound links, lightbox, and filter buttons on gallery grid */
  jQuery("body").on("click", ".tg-grid-holder a, .tg-show-filter", function() {
    var $this = jQuery(this),
      data = "";

    /* if click is outbound link or lightbox */
    if ($this.is("a")) {
      /* if clicked item is lightbox link */
      if ($this.hasClass("tg-media-button")) data += "Lightbox: ";

      data += $this.attr("data-tolb-alt");
    } else {
      /* if click is filter button */
      data += "Filter: " + $this.text();
    }

    /* send event data to Google */
    gtag("event", "click", {
      event_category: "Gallery Interactions",
      event_label: data
    });
  });
});
