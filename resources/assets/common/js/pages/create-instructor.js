 $(document).ready(function() {
     $('.btn-date').DateTimePicker();

     $('.create-instructor-form').validate({
         rules: {
             first_name: "required",
             last_name: "required",


             email: {
                 required: true,
                 email: true
             },
             birth_date: {
                 required: true
             },
             phone_number: {
                 required: true,
                 minlength: 7,
                 maxlength:15
             },
             address: {
                 required: true,
                 maxlenght:250
             }
         },
         messages: {
             first_name: "Please enter your first name",
             last_name: "Please enter your last name",
             email: "Please enter a valid email address",
             birth_date:"Please select your date of birth",
             phone_number:"Please enter valid number ",
             address:"Please enter you address"
         },
         errorElement: "em",
         errorPlacement: function ( error, element ) {

             error.addClass("help-block");

             if ( element.prop('type') === 'checkbox') {
                 error.insertAfter(element.parent('label'));
             } else {
                 error.insertAfter(element);
             }
         },
         highlight: function (element) {
             $(element).parent('.text-field').addClass('has-error').removeClass('text-field').children().addClass('error');
             $(element).parent('.number-div').addClass('number-error').removeClass('number-div').children().addClass('error');
             $(element).parent('.dial-code-div').addClass('dial-code-error').removeClass('dial-code-div').children().addClass('error');
         },
         unhighlight: function (element) {
             $(element).parent('.has-error').addClass('text-field').removeClass('has-error').children().removeClass('error');
             $(element).parent('.number-error').addClass('number-div').removeClass('number-error').children().removeClass('error');
             $(element).parent('.dial-code-error').addClass('dial-code-div').removeClass('dial-code-error').children().removeClass('error');
         }
     });

     // $('.add-trainee').on('click',function () {
     //     console.log('7');
     // })


     // initialize with defaults
     $('#profilePhoto').fileinput({
         'showUpload':true,
         'previewFileType':'image',
         // initialPreview: [url1, url2],
         initialPreview: window.previewImage,
         uploadUrl: window.uploadProfilePic,
         initialPreviewConfig: [
             {
                 caption: 'Default Pic',
                 width: '120px',
                 url: window.removeUploadedProfilePic, // server delete action
                 key: 100,
                 extra: {_token: $('[name="_token"]').val(),'profile_img': $('#profile_img').val()}
             }
         ],
         uploadExtraData: {_token: $('[name="_token"]').val()},
         initialPreviewAsData: true,
         allowedFileTypes: ['image'],
         allowedFileExtensions: ["jpg", "gif", "png", "jpeg"]
     });

     $('#profilePhoto').on('fileselect', function(event, numFiles, label) {
         console.log("fileselect");
     });

     $('#profilePhoto').on('fileselectnone', function(event) {
         console.log("Huh! No files were selected.");
     });

     $('#profilePhoto').on('filebatchselected', function(event, files) {
         console.log('File batch selected triggered');
     });

     $('#profilePhoto').on('fileclear', function(event) {
         console.log("fileclear");
     });

     $('#profilePhoto').on('filecleared', function(event) {
         console.log("filecleared");
     });

     $('#profilePhoto').on('fileimageloaded', function(event, previewId) {
         console.log("fileimageloaded");
     });
     $('#profilePhoto').on('filereset', function(event) {
         console.log("filereset");
     });
     $('#profilePhoto').on('fileloaded', function(event, file, previewId, index, reader) {
         console.log("fileloaded");
     });

     $('#profilePhoto').on('fileuploaded', function(event, data, previewId, index, reader) {
         console.log("fileuploadedddddd");
         var response = data.response;
         console.log(response);
         console.log(response.uploaded_file_name);
         $('.file-caption.icon-visible.file-caption-name').val(response.uploaded_file_name);
         $('#profile_img').val(response.uploaded_file_name);
     });

 });

