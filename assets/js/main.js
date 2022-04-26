var bar = new ProgressBar.Circle(chart1, {
  color: '#1DB3DC',
  strokeWidth: 10,
  trailWidth: 10,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: {
    color: '#1DB3DC',
    width: 10
  },
  to: {
    color: '#1DB3DC',
    width: 10
  },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar.text.style.fontFamily = 'Poppins';
bar.text.style.fontSize = '2.5rem';
bar.text.style.marginTop = '-0.3rem';
   bar.animate(0.39);
 
   
  

   var bar = new ProgressBar.Circle(chart2, {
    color: '#35D550',
    strokeWidth: 10,
    trailWidth: 10,
    easing: 'easeInOut',
    duration: 1400,
    text: {
      autoStyleContainer: false
    },
    from: {
      color: '#35D550',
      width: 10
    },
    to: {
      color: '#35D550',
      width: 10
    },
    // Set default step function for all animate calls
    step: function(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
  
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText('');
      } else {
        circle.setText(value);
      }
  
    }
  });
  bar.text.style.fontFamily = 'Poppins';
  bar.text.style.fontweight = 'Poppins';
  bar.text.style.fontSize = '2.5rem';
  bar.text.style.marginTop = '-0.3rem';
     bar.animate(0.54);
     
     var bar = new ProgressBar.Circle(chart3, {
      color: '#FF7474',
      strokeWidth: 10,
      trailWidth: 10,
      easing: 'easeInOut',
      duration: 1400,
      text: {
        autoStyleContainer: false
      },
      from: {
        color: '#FF7474',
        width: 10
      },
      to: {
        color: '#FF7474',
        width: 10
      },
      // Set default step function for all animate calls
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);
    
        var value = Math.round(circle.value() * 100);
        if (value === 0) {
          circle.setText('');
        } else {
          circle.setText(value);
        }
    
      }
    });
    bar.text.style.fontFamily = 'Poppins';
    bar.text.style.fontSize = '2.5rem';
    bar.text.style.marginTop = '-0.3rem';
       bar.animate(0.70);
    