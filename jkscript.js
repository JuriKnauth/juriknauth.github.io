	function buttonColor(){
		var path = window.location.href;
    var curId = document.getElementById("Blog");
	var	curId1 = document.getElementById("Projects");
	var	curId2 = document.getElementById("Contact");
	var	curId3 = document.getElementById("Index");
    if (path.includes("Blog")){
			curId1.id = 'Default';
			curId2.id = 'Default';
			curId3.id = 'Default';
        }
      else if (path.includes("Projects")){
        {
          	curId.id = 'Default';
			curId2.id = 'Default';
			curId3.id = 'Default';
        }
      	else if (path.includes("Contact")){
			curId.id = 'Default';
			curId1.id = 'Default';
			curId3.id = 'Default';
        }
      	else
        {
			curId.id = 'Default';
			curId1.id = 'Default';
			curId2.id = 'Default';
        }		
    }; 

		function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }

        function openTab(tabName, elmnt, color) {

            var i, tabcontent, tablinks, articlebody;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablink");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].style.backgroundColor = "";
                tablinks[i].style.color = "#FFFFFF";
            }
            articlebody = document.getElementsByClassName("articlebody");
            for (i = 0; i < articlebody.length; i++) {
                articlebody[i].style.backgroundColor = "";
            }
            document.getElementById(tabName).style.display = "block";
            elmnt.style.backgroundColor = color;
            elmnt.style.color = "#000000";

        }
		
        // Get the modal
        var modal = document.getElementById('myModal');

        function openModal() {
            document.getElementById('myModal').style.display = "block";
        }

        function closeModal() {
            document.getElementById('myModal').style.display = "none";
        }

        function closeOutModal(event) {
            if (event.target == myModal) {
                document.getElementById('myModal').style.display = "none";
            }
            else if (event.target == dropdown - content) {
                document.getElementById(0).classList.toggle("show");
            }

        }

        var slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function currentSlide(n) {
            showSlides(slideIndex = n);
        }

        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("mySlides");
            var dots = document.getElementsByClassName("demo");
            var captionText = document.getElementById("caption");
            if (n > slides.length) { slideIndex = 1 }
            if (n < 1) { slideIndex = slides.length }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }
            slides[slideIndex - 1].style.display = "block";
            dots[slideIndex - 1].className += " active";
            captionText.innerHTML = dots[slideIndex - 1].alt;
        }

        /* When the user clicks on the button,
        toggle between hiding and showing the dropdown content */
        function myFunction(i) {
            document.getElementById(i).classList.toggle("show");
        }
		
        // Close the dropdown if the user clicks outside of it
        window.onclick = function (e) {
            if (!e.target.matches('.dropbtn')) {
                var myDropdown = document.getElementById("myDropdown");
                if (myDropdown.classList.contains('show')) {
                    myDropdown.classList.remove('show');
                }
            }
        }	

		
