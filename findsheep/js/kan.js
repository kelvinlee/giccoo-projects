if ( WEBGL.isWebGLAvailable() === false ) {
				document.body.appendChild( WEBGL.getWebGLErrorMessage() );
			}
			var SHADOW_MAP_WIDTH = 2048, SHADOW_MAP_HEIGHT = 1024;
			var SCREEN_WIDTH = window.innerWidth;
			var SCREEN_HEIGHT = window.innerHeight;
			var FLOOR = - 250;
			var ANIMATION_GROUPS = 25;
			var camera, controls, scene, renderer;
			var container, stats;
			var NEAR = 5, FAR = 3000;
			var morph, morphs = [], mixer, animGroups = [];
			var light;
			var clock = new THREE.Clock();
			init();
			animate();
			function init() {
				container = document.createElement( 'div' );
				document.body.appendChild( container );
				// CAMERA
				camera = new THREE.PerspectiveCamera( 23, SCREEN_WIDTH / SCREEN_HEIGHT, NEAR, FAR );
				camera.position.set( 700, 50, 1900 );
				// SCENE
				scene = new THREE.Scene();
				scene.background = new THREE.Color( 0x59472b );
				scene.fog = new THREE.Fog( 0x59472b, 1000, FAR );
				controls = new THREE.FirstPersonControls( camera );
				controls.lookSpeed = 0.0125;
				controls.movementSpeed = 500;
				controls.noFly = false;
				controls.lookVertical = true;
				controls.lookAt( scene.position );
				// LIGHTS
				var ambient = new THREE.AmbientLight( 0x444444 );
				scene.add( ambient );
				light = new THREE.SpotLight( 0xffffff, 1, 0, Math.PI / 2 );
				light.position.set( 0, 1500, 1000 );
				light.target.position.set( 0, 0, 0 );
				light.castShadow = true;
				light.shadow = new THREE.LightShadow( new THREE.PerspectiveCamera( 50, 1, 700, FAR ) );
				light.shadow.bias = 0.0001;
				light.shadow.mapSize.width = SHADOW_MAP_WIDTH;
				light.shadow.mapSize.height = SHADOW_MAP_HEIGHT;
				scene.add( light );
				createScene();
				// RENDERER
				renderer = new THREE.WebGLRenderer();
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
				container.appendChild( renderer.domElement );
				renderer.autoClear = false;
				//
				renderer.shadowMap.enabled = true;
				renderer.shadowMap.type = THREE.PCFSoftShadowMap;
				// STATS
				stats = new Stats();
				container.appendChild( stats.dom );
				//
				window.addEventListener( 'resize', onWindowResize, false );
			}
			function onWindowResize() {
				SCREEN_WIDTH = window.innerWidth;
				SCREEN_HEIGHT = window.innerHeight;
				camera.aspect = SCREEN_WIDTH / SCREEN_HEIGHT;
				camera.updateProjectionMatrix();
				renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT );
				controls.handleResize();
			}
			function createScene( ) {
				// GROUND
				var geometry = new THREE.PlaneBufferGeometry( 100, 100 );
				var planeMaterial = new THREE.MeshPhongMaterial( { color: 0xffdd99 } );
				var ground = new THREE.Mesh( geometry, planeMaterial );
				ground.position.set( 0, FLOOR, 0 );
				ground.rotation.x = - Math.PI / 2;
				ground.scale.set( 100, 100, 100 );
				ground.castShadow = false;
				ground.receiveShadow = true;
				scene.add( ground );
				// TEXT
				var loader = new THREE.FontLoader();
				loader.load( 'fonts/helvetiker_bold.typeface.json', function ( font ) {
					var textGeo = new THREE.TextBufferGeometry( "THREE.JS", {
						font: font,
						size: 200,
						height: 50,
						curveSegments: 12,
						bevelThickness: 2,
						bevelSize: 5,
						bevelEnabled: true
					} );
					textGeo.computeBoundingBox();
					var centerOffset = - 0.5 * ( textGeo.boundingBox.max.x - textGeo.boundingBox.min.x );
					var textMaterial = new THREE.MeshPhongMaterial( { color: 0xff0000, specular: 0xffffff } );
					var mesh = new THREE.Mesh( textGeo, textMaterial );
					mesh.position.x = centerOffset;
					mesh.position.y = FLOOR + 67;
					mesh.castShadow = true;
					mesh.receiveShadow = true;
					scene.add( mesh );
				} );
				// CUBES
				var mesh = new THREE.Mesh( new THREE.BoxBufferGeometry( 1500, 220, 150 ), planeMaterial );
				mesh.position.y = FLOOR - 50;
				mesh.position.z = 20;
				mesh.castShadow = true;
				mesh.receiveShadow = true;
				scene.add( mesh );
				var mesh = new THREE.Mesh( new THREE.BoxBufferGeometry( 1600, 170, 250 ), planeMaterial );
				mesh.position.y = FLOOR - 50;
				mesh.position.z = 20;
				mesh.castShadow = true;
				mesh.receiveShadow = true;
				scene.add( mesh );
				mixer = new THREE.AnimationMixer( scene );
				for ( var i = 0; i !== ANIMATION_GROUPS; ++ i ) {
					var group = new THREE.AnimationObjectGroup();
					animGroups.push( group );
				}
				// MORPHS
				function addMorph( mesh, clip, speed, duration, x, y, z, fudgeColor, massOptimization ) {
					mesh = mesh.clone();
					mesh.material = mesh.material.clone();
					if ( fudgeColor ) {
						mesh.material.color.offsetHSL( 0, Math.random() * 0.5 - 0.25, Math.random() * 0.5 - 0.25 );
					}
					mesh.speed = speed;
					if ( massOptimization ) {
						var index = Math.floor( Math.random() * ANIMATION_GROUPS ),
							animGroup = animGroups[ index ];
						animGroup.add( mesh );
						if ( ! mixer.existingAction( clip, animGroup ) ) {
							var randomness = 0.6 * Math.random() - 0.3;
							var phase = ( index + randomness ) / ANIMATION_GROUPS;
							mixer.clipAction( clip, animGroup ).
								setDuration( duration ).
								startAt( - duration * phase ).
								play();
						}
					} else {
						mixer.clipAction( clip, mesh ).
							setDuration( duration ).
							startAt( - duration * Math.random() ).
							play();
					}
					mesh.position.set( x, y, z );
					mesh.rotation.y = Math.PI / 2;
					mesh.castShadow = true;
					mesh.receiveShadow = true;
					scene.add( mesh );
					morphs.push( mesh );
				}
				var loader = new THREE.GLTFLoader();
				loader.load( "models/gltf/Horse.glb", function ( gltf ) {
					var mesh = gltf.scene.children[ 0 ];
					var clip = gltf.animations[ 0 ];
					for ( var i = - 600; i < 601; i += 2 ) {
						addMorph( mesh, clip, 550, 1, 100 - Math.random() * 3000, FLOOR, i, true, true );
					}
				} );
			}
			//
			function animate() {
				requestAnimationFrame( animate );
				stats.begin();
				render();
				stats.end();
			}
			function render() {
				var delta = clock.getDelta();
				if ( mixer ) mixer.update( delta );
				for ( var i = 0; i < morphs.length; i ++ ) {
					morph = morphs[ i ];
					morph.position.x += morph.speed * delta;
					if ( morph.position.x > 2000 ) {
						morph.position.x = - 1000 - Math.random() * 500;
					}
				}
				controls.update( delta );
				renderer.clear();
				renderer.render( scene, camera );
			}
