(function($){var check_element=function(name){var obj=null;var check_id=$('#'+ name);var check_name=$('input[name='+ name+']');if(check_id.length)
obj=check_id;else if(check_name!=undefined)
obj=check_name;return obj;};$.fn.autotab_magic=function(focus){for(var i=0;i<this.length;i++)
{var n=i+ 1;var p=i- 1;if(i>0&&n<this.length)
$(this[i]).autotab({target:$(this[n]),previous:$(this[p])});else if(i>0)
$(this[i]).autotab({previous:$(this[p])});else
$(this[i]).autotab({target:$(this[n])});if(focus!=null&&(isNaN(focus)&&focus==$(this[i]).attr('id'))||(!isNaN(focus)&&focus==i))
$(this[i]).focus();}
return this;};$.fn.autotab_filter=function(options){var defaults={format:'all',uppercase:false,lowercase:false,nospace:false,pattern:null};if(typeof options=='string'||typeof options=='function')
defaults.format=options;else
$.extend(defaults,options);for(var i=0;i<this.length;i++)
{$(this[i]).bind('keyup',function(e){var val=this.value;switch(defaults.format)
{case'text':var pattern=new RegExp('[0-9]+','g');val=val.replace(pattern,'');break;case'alpha':var pattern=new RegExp('[^a-zA-Z]+','g');val=val.replace(pattern,'');break;case'number':case'numeric':var pattern=new RegExp('[^0-9]+','g');val=val.replace(pattern,'');break;case'alphanumeric':var pattern=new RegExp('[^0-9a-zA-Z]+','g');val=val.replace(pattern,'');break;case'custom':var pattern=new RegExp(defaults.pattern,'g');val=val.replace(pattern,'');break;case'all':default:if(typeof defaults.format=='function')
var val=defaults.format(val);break;}
if(defaults.nospace)
{var pattern=new RegExp('[ ]+','g');val=val.replace(pattern,'');}
if(defaults.uppercase)
val=val.toUpperCase();if(defaults.lowercase)
val=val.toLowerCase();if(val!=this.value)
this.value=val;});}};$.fn.autotab=function(options){var defaults={format:'all',maxlength:2147483647,uppercase:false,lowercase:false,nospace:false,target:null,previous:null,pattern:null};$.extend(defaults,options);if(typeof defaults.target=='string')
defaults.target=check_element(defaults.target);if(typeof defaults.previous=='string')
defaults.previous=check_element(defaults.previous);var maxlength=$(this).attr('maxlength');if(defaults.maxlength==2147483647&&maxlength!=2147483647)
defaults.maxlength=maxlength;else if(defaults.maxlength>0)
$(this).attr('maxlength',defaults.maxlength)
else
defaults.target=null;if(defaults.format!='all')
$(this).autotab_filter(defaults);return $(this).bind('keydown',function(e){if(e.which==8&&this.value.length==0&&defaults.previous)
defaults.previous.focus().val(defaults.previous.val());}).bind('keyup',function(e){var keys=[8,9,16,17,18,19,20,27,33,34,35,36,37,38,39,40,45,46,144,145];if(e.which!=8)
{var val=$(this).val();if($.inArray(e.which,keys)==-1&&val.length==defaults.maxlength&&defaults.target)
defaults.target.focus();}});};})(jQuery);