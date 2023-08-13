<template>
  <BaseButton @click="setActiveComponent('ResourcesList')" :mode="resourceListButtonMode">
    Resources list</BaseButton
  >
  <BaseButton @click="setActiveComponent('AddResource')" :mode="addResourceButtonMode"
    >Create resource</BaseButton
  >
  <KeepAlive>
    <component :is="activeComponent"></component>
  </KeepAlive>
</template>
<script>
import ResourcesList from "./ResourcesList.vue";
import AddResource from "./AddResource.vue";
import genericCover from "../../assets/images/book-covers/generic-cover.jpg";

export default {
  components: { ResourcesList, AddResource },
  data() {
    return {
      activeComponent: "ResourcesList",
      resourcesArray: [
        {
          id: "978-8479142919",
          title: "Historia De La Filosofía I - Grecia y Roma",
          description:
            'Esta "Historia de la Filosofía" realizada por Guillermo Fraile (I-III) y Teófilo Urdánoz (IV-VIII) es ya una obra clásica en la BAC, alcanzando desde la aparición del primer volumen en 1956 numerosas reimpresiones. La constante y frecuente publicación de estos volúmenes es la mejor garantía de la buena acogida que esta importante obra ha tenido y tiene entre sus lectores.',
          link: "https://www.amazon.es/Historia-FilosofÃ­a-I-Grecia-Roma/dp/847914291X/ref=sr_1_1?__mk_es_ES=ÃMÃÅ½ÃÃ&crid=2NRQ3RMXGI7EK&keywords=Historia+de+la+filosofÃ­a+guillermo+fraile&qid=1691394114&sprefix=historia+de+la+filosofÃ­a+guillermo+frail,aps,126&sr=8-1;",
          author: "Guillermo Fraile",
          cover: genericCover,
        },
        {
          id: "978-8479142911",
          title: "Historia de la Filosofía I",
          description:
            "La presente Historia de la Filosofía de Felipe Martínez Marzoa es una reelaboración de la obra del mismo título publicada por el autor en la Colección Fundamentos de esta editorial. En ella el profesor Martínez Marzoa se remite fundamentalmente a la obra original de los pensadores de que trata, y expone en cada caso la raíz histórica de los conceptos filosóficos básicos. La idea central del libro radica en que una historia de la filosofía ha de ser, ante todo, una investigación sobre la carta de naturaleza de sus propios conceptos. Nos encontramos ante un texto rigurosamente introductorio: no exige, por parte del lector, una previa cultura filosófica y filológica. Aunque si requiere, en cambio -puesto que intenta resolver cuestiones sin eludir dificultades-, una cierta aptitud para el esfuerzo intelectual.",
          link: "https://www.amazon.es/Historia-FilosofÃ­a-Fundamentos-Felipe-MartÃ­nez/dp/8470902733/ref=pd_bxgy_img_sccl_1/258-9934084-9939612?pd_rd_w=SztWM&content-id=amzn1.sym.1f3e136f-80dc-4ee2-9d0d-548611b99b5c&pf_rd_p=1f3e136f-80dc-4ee2-9d0d-548611b99b5c&pf_rd_r=RA4D9T5GDN6EARV07QH3&pd_rd_wg=dJKlo&pd_rd_r=5c4b252e-448c-4547-aa93-c1c09580549c&pd_rd_i=8470902733&psc=1",
          author: "Felipe Martínez Marzoa",
          cover: genericCover,
        },
        {
          id: "978-8479142919",
          title: "Historia De La Filosofía I - Grecia y Roma",
          description:
            'Esta "Historia de la Filosofía" realizada por Guillermo Fraile (I-III) y Teófilo Urdánoz (IV-VIII) es ya una obra clásica en la BAC, alcanzando desde la aparición del primer volumen en 1956 numerosas reimpresiones. La constante y frecuente publicación de estos volúmenes es la mejor garantía de la buena acogida que esta importante obra ha tenido y tiene entre sus lectores.',
          link: "https://www.amazon.es/Historia-FilosofÃ­a-I-Grecia-Roma/dp/847914291X/ref=sr_1_1?__mk_es_ES=ÃMÃÅ½ÃÃ&crid=2NRQ3RMXGI7EK&keywords=Historia+de+la+filosofÃ­a+guillermo+fraile&qid=1691394114&sprefix=historia+de+la+filosofÃ­a+guillermo+frail,aps,126&sr=8-1;",

          author: "Guillermo Fraile",
          cover: genericCover,
        },
        {
          id: "978-8479142911",
          title: "Historia de la Filosofía I",
          description:
            "La presente Historia de la Filosofía de Felipe Martínez Marzoa es una reelaboración de la obra del mismo título publicada por el autor en la Colección Fundamentos de esta editorial. En ella el profesor Martínez Marzoa se remite fundamentalmente a la obra original de los pensadores de que trata, y expone en cada caso la raíz histórica de los conceptos filosóficos básicos. La idea central del libro radica en que una historia de la filosofía ha de ser, ante todo, una investigación sobre la carta de naturaleza de sus propios conceptos. Nos encontramos ante un texto rigurosamente introductorio: no exige, por parte del lector, una previa cultura filosófica y filológica. Aunque si requiere, en cambio -puesto que intenta resolver cuestiones sin eludir dificultades-, una cierta aptitud para el esfuerzo intelectual.",
          link: "https://www.amazon.es/Historia-FilosofÃ­a-Fundamentos-Felipe-MartÃ­nez/dp/8470902733/ref=pd_bxgy_img_sccl_1/258-9934084-9939612?pd_rd_w=SztWM&content-id=amzn1.sym.1f3e136f-80dc-4ee2-9d0d-548611b99b5c&pf_rd_p=1f3e136f-80dc-4ee2-9d0d-548611b99b5c&pf_rd_r=RA4D9T5GDN6EARV07QH3&pd_rd_wg=dJKlo&pd_rd_r=5c4b252e-448c-4547-aa93-c1c09580549c&pd_rd_i=8470902733&psc=1",
          author: "Felipe Martínez Marzoa",
          cover: genericCover,
        },
      ],
    };
  },
  methods: {
    setActiveComponent(clickedButton) {
      this.activeComponent = clickedButton;
    },
  },
  provide() {
    return {
      resources: this.resourcesArray,
    };
  },
  computed: {
    resourceListButtonMode(){
      return this.activeComponent === "ResourcesList" ? "base_button" : "base_button flat"
    },
    addResourceButtonMode(){
      return this.activeComponent === "AddResource" ? "base_button" : "base_button flat"
    }
  }
};
</script>
<layout></layout>
