import * as THREE from 'three';

let scene, camera;

    scene = new THREE.Scene();
    // camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    const renderer = new THREE.WebGLRenderer();
    
    // camera.position.z = 1;
    // camera.rotation.x = 1.16;
    // camera.rotation.y = -0.12;
    // camera.rotation.z = 0.27;
    
    let ambient = new THREE.AmbientLight(0x555555);
    scene.add(ambient);
    
    renderer.setSize(window.innerWidth, window.innerHeight);


    scene.fog = new THREE.FogExp2(0x03544e, 0.001);

    renderer.setClearColor(scene.fog.color);

    document.body.appendChild( renderer.domElement );

    let loader = new THREE.TextureLoader();
    let loader2 = new THREE.TextureLoader();

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );
    scene.add( cube );

    camera.position.z = 5;

    loader.load(
        // resource URL
        'smoke3.png',
    
        // onLoad callback
        function ( texture ) {
            // in this example we create the material when the texture is loaded
            const material = new THREE.MeshBasicMaterial( {
                map: texture
             } );
        },undefined,function(err){console.log("error");});

    // loader2.load("smoke3.png", function(texture){
    //     cloudGeo = new THREE.BufferGeometry(500,500);
    //     cloudMaterial = new THREE.MeshLambertMaterial({
    //         map: texture,
    //         transparent: true
    //     });

    //     for (let p=0; p<50; p++){
    //         let cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
    //         cloud.position.set(
    //             Math.random()*800 -400,
    //             500,
    //             Math.random()*500-500
    //         );
    //         cloud.rotation.x = 1.16;
    //         cloud.rotation.y = -0.12;
    //         cloud.rotation.z = Math.random()*2*Math.PI;
    //         cloud.material.opacity = 0.55;
    //         // cloudParticles.push(cloud);
    //         // scene.add(cloud);
    //     }
    // }));

    // animate();


function animate(){

    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
    renderer.render(scene, camera);

}

// alert("all good");
animate();
