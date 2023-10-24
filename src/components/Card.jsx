import * as THREE from 'three';
import { scene } from './SceneSetup';

const createCard = () => {
  const geometry = new THREE.BoxGeometry(5, 3, 0.1);
  const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const card = new THREE.Mesh(geometry, material);
  card.position.z = -5;
  scene.add(card);
  return card;
};

const addFlipInteraction = (card) => {
  card.userData.isFlipping = false;
  card.userData.flipDirection = 1;

  function flipCard() {
    if (card.userData.isFlipping) return;
    card.userData.isFlipping = true;

    const flipSpeed = 0.05;
    function flipAnimation() {
      card.rotation.y += flipSpeed * card.userData.flipDirection;
      if (Math.abs(card.rotation.y) >= Math.PI / 2) {
        card.userData.flipDirection *= -1;
        // Swap the content here if needed
      }
      if ((card.userData.flipDirection === 1 && card.rotation.y >= 0) ||
          (card.userData.flipDirection === -1 && card.rotation.y <= 0)) {
        card.rotation.y = 0;
        card.userData.isFlipping = false;
        return;
      }
      requestAnimationFrame(flipAnimation);
    }
    flipAnimation();
  }

  document.addEventListener('dblclick', flipCard);
};

export { createCard, addFlipInteraction };
