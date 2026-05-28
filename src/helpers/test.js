import * as THREE from 'three';

export class TestObject{
    constructor(scene){
        this.scene = scene;
        this.cube = null;
        this.grid = null;
    }
    
    createAll(){
        //this._createCube();
        this._createGrid();
        //this._createAxesHelper();
    }
    
    async _createCube(){
        const loader = new THREE.TextureLoader();
        const texture = await loader.loadAsync( '../../textures/futuristic-hex-armor_albedo.png' );
        const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
        const material = new THREE.MeshStandardMaterial({ map:texture } );
        this.cube = new THREE.Mesh(geometry, material);
        this.scene.add(this.cube);
        
        return this.cube;
    }
    
    _createGrid(){
        const gridHelper = new THREE.GridHelper(20,20,'cyan', 'cyan');
        this.scene.add( gridHelper );
    }
    
    _createAxesHelper(){
        const axesHelper = new THREE.AxesHelper( 5 );
        this.scene.add( axesHelper );
    }
}