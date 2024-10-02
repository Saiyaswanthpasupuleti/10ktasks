// function demo(x){
//     setTimeout(()=>{
//          console.log("1 st function")
//          x()
//     },2000)

// }
// function demo2(y){
//      setTimeout(()=>{
//         console.log("2nd function")
//         y()
//     },1000)
// }
//  function demo3(z){
//      setTimeout(()=>{
//         console.log("3rd function")
//         z()
//     },1500)

// }
// function demo4(){

//      setTimeout(()=>{
//         console.log("4th ufnction")
//     },2500)

// }
// demo(()=>{
//     demo2(()=>{
//         demo3(()=>{
//             demo4()
//         })
//     })
// })=

function one(a) {
  setTimeout(() => {
    console.log("this 1st function");
    a();
  }, 1000);
}
function two(b) {
  setTimeout(() => {
    console.log("this is 2nd function");
    b();
  }, 1500);
}

function three(c) {
  setTimeout(() => {
    console.log("this 3rd function");
    c();
  }, 1700);
}

function four(d) {
  setTimeout(() => {
    console.log("this is 4th function");
    d();
  }, 4000);
}

function five(e) {
  setTimeout(() => {
    console.log("this 5th function");
    e();
  }, 3500);
}

function six(f) {
  setTimeout(() => {
    console.log("this is 6th function");
    f();
  }, 1100);
}

function seven(g) {
  setTimeout(() => {
    console.log("this is seventh function");
    g();
  }, 2700);
}

function eight(h) {
  setTimeout(() => {
    console.log("this is eight function ");
    h();
  }, 300);
}
function nine(i) {
  setTimeout(() => {
    console.log("this is nighth function");
    i();
  }, 1200);
}
function ten() {
  setTimeout(() => {
    console.log("this is tenth function");
  }, 500);
}

one(() => {
  two(() => {
    three(() => {
      four(() => {
        five(() => {
          six(() => {
            seven(() => {
              eight(() => {
                nine(() => {
                  ten();
                });
              });
            });
          });
        });
      });
    });
  });
});

// one()
// two()
// three()
// four()
// five()
// six()
// seven()
// eight()
// nine()
// ten()
