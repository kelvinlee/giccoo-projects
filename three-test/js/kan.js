

      var demo = new CANNON.Demo();

      var postStepHandler;

      demo.addScene("Tween box",function(){
        var world = demo.getWorld();

        // Inputs
        var startPosition = new CANNON.Vec3(5, 0, 2);
        var endPosition = new CANNON.Vec3(-5, 0, 2);
        var tweenTime = 3; // seconds

        var body = new CANNON.Body({
          mass: 0,
          type: CANNON.Body.KINEMATIC,
          position: startPosition
        });
        body.addShape(new CANNON.Box(new CANNON.Vec3(1,1,1)));
        world.add(body);
        demo.addVisual(body);

        if(postStepHandler){
          world.removeEventListener('postStep', postStepHandler);
        }

        // Compute direction vector and get total length of the path
        var direction = new CANNON.Vec3();
        endPosition.vsub(startPosition, direction);
        var totalLength = direction.length();
        direction.normalize();

        var speed = totalLength / tweenTime;
        direction.scale(speed, body.velocity);

        // Save the start time
        var startTime = world.time;

        var offset = new CANNON.Vec3();

        postStepHandler = function(){

          // Progress is a number where 0 is at start position and 1 is at end position
          var progress = (world.time - startTime) / tweenTime;

          if(progress < 1){
            direction.scale(progress * totalLength, offset);
            startPosition.vadd(offset, body.position);
          } else {
            body.velocity.set(0,0,0);
            body.position.copy(endPosition);
            world.removeEventListener('postStep', postStepHandler);
            postStepHandler = null;
          }
        }

        world.addEventListener('postStep', postStepHandler);
      });

      demo.start();

    

        // var demo = new CANNON.Demo();

        // demo.addScene("Bunny",function(){

        //     var world = demo.getWorld();

        //     world.gravity.set(0,0,-20);
        //     world.broadphase = new CANNON.NaiveBroadphase();
        //     world.solver.iterations = 20;
        //     world.defaultContactMaterial.contactEquationStiffness = 1e10;
        //     world.defaultContactMaterial.contactEquationRelaxation = 10;

        //     var bunnyBody = new CANNON.Body({ mass: 1 });
        //     for(var i=0; i<bunny.length; i++){

        //         var rawVerts = bunny[i].verts;
        //         var rawFaces = bunny[i].faces;
        //         var rawOffset = bunny[i].offset;

        //         var verts=[], faces=[], offset;

        //         // Get vertices
        //         for(var j=0; j<rawVerts.length; j+=3){
        //             verts.push(new CANNON.Vec3( rawVerts[j]  ,
        //                                         rawVerts[j+1],
        //                                         rawVerts[j+2]));
        //         }

        //         // Get faces
        //         for(var j=0; j<rawFaces.length; j+=3){
        //             faces.push([rawFaces[j],rawFaces[j+1],rawFaces[j+2]]);
        //         }

        //         // Get offset
        //         offset = new CANNON.Vec3(rawOffset[0],rawOffset[1],rawOffset[2]);

        //         // Construct polyhedron
        //         var bunnyPart = new CANNON.ConvexPolyhedron(verts,faces);

        //         // Add to compound
        //         bunnyBody.addShape(bunnyPart,offset);
        //     }

        //     // Create body
        //     bunnyBody.quaternion.setFromAxisAngle(new CANNON.Vec3(1,0,0),-Math.PI/2);
        //     var z180 = new CANNON.Quaternion();
        //     z180.setFromAxisAngle(new CANNON.Vec3(0,0,1),Math.PI);
        //     bunnyBody.quaternion = z180.mult(bunnyBody.quaternion);
        //     world.add(bunnyBody);
        //     demo.addVisual(bunnyBody);

        //     // ground plane
        //     var groundShape = new CANNON.Plane();
        //     var groundBody = new CANNON.Body({ mass: 0 });
        //     groundBody.addShape(groundShape);
        //     groundBody.position.set(0,0,-5);
        //     world.add(groundBody);
        //     demo.addVisual(groundBody);

        // });

        // demo.start();

        // 