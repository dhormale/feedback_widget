var feedback = (function ($) {

	'use strict';

	function appendFeedback(feedback_options) {
		var model_html = '<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">';
		model_html += '<div class="modal-dialog modal-dialog-centered" role="document">';
		model_html += '<div class="modal-content">';
		model_html += '<div class="modal-header">';
		model_html += '<h5 class="modal-title" id="exampleModalLongTitle">' + feedback_options.title + '</h5>';
		model_html += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
		model_html += '<span aria-hidden="true">&times;</span>';
		model_html += '</button>';
		model_html += '</div>';
		model_html += '<div class="modal-body">';
		model_html += '...';
		model_html += '</div>';
		model_html += '<div class="modal-footer">';
		model_html += '<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>';
		model_html += '<button type="button" class="btn btn-primary" data-dismiss="modal">Submit</button>';
		model_html += '</div>';
		model_html += '</div>';
		model_html += '</div>';
		model_html += '</div>';

		model_html += '<div class="center">';
		model_html += '<a href="#" data-toggle="modal" data-target="#exampleModalCenter">Feedback</a>';
		model_html += '</div>';
		
		$('body').append(model_html);
	}

	function init(feedback_options) {
		appendFeedback(feedback_options);
	}

    return {
		init : init,
    };

}(jQuery));
