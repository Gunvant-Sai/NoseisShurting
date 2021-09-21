var noseX= 0;
var noseY= 0;


function setup()
{
   canvas = createCanvas(300 , 300);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(300,300);
   video.hide();

   poseNet = ml5.poseNet(video, modelready);
   poseNet.on('pose', poseNose);
}

function poseNose(result)
{
 if (result.length > 0)
 {
     console.log(result);
     console.log("Nose x position = "+result[0].pose.nose.x);
     noseX= result[0].pose.nose.x-18;
     console.log("Nose y position = "+result[0].pose.nose.y);
     noseY= result[0].pose.nose.y-18;
 }
}

function modelready()
{
 console.log("Ml5 Is Initialized");
}

function preload()
{
  clown_nose = loadImage("https://i.postimg.cc/RVws1Zsy/clownnose.png");
}

function draw()
{
  image(video, 0, 0, 300, 300);
  image(clown_nose , noseX , noseY, 40 , 40);
}

function take_snapshot()
{
    save("Mynoseishurting.png");
}