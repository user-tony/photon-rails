(function($){$.fn.textareaCounter=function(options){var defaults={limit:100};var options=$.extend(defaults,options);return this.each(function(){var obj,text,wordcount,limited;obj=$(this);obj.after('<span class="field-annotation" id="counter-text">Max. '+options.limit+' words</span>');obj.keyup(function(){text=obj.val();if(text===""){wordcount=0;}else{wordcount=$.trim(text).split(" ").length;}
if(wordcount>options.limit){$("#counter-text").html('<span style="color: #DD0000;">0 words left</span>');limited=$.trim(text).split(" ",options.limit);limited=limited.join(" ");$(this).val(limited);}else{$("#counter-text").html((options.limit- wordcount)+' words left');}});});};})(jQuery);