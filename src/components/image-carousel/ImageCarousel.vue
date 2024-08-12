<template>
  <div v-show="images.length > 0" class="carousel">
    <div class="carousel__main">
      <div class="carousel__main__discount">
        <div class="carousel__main__discount__title">
          {{ title }}
        </div>
        <div class="carousel__main__discount__subtitle">
          {{ subtitle }}
        </div>
      </div>
      <img
        v-if="images.length > 0"
        :src="images[currentIndex].name"
        alt="Carousel Image"
        class="carousel__main__image"
      />
    </div>
    <div class="carousel__thumbnails">
      <div v-for="image in currentThumbnails" :key="image.id" class="carousel__thumbnails__item">
        <img
          :src="image.name"
          alt="Thumbnail Image"
          @click="changeImage(image.id)"
          class="carousel__thumbnails__item__image"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [],
      currentIndex: 0,
      title: '$1.99',
      subtitle: 'Original value $500',
      mainImageRatio: 400 / 132, // 3.03:1 ratio
      thumbnailRatio: 400 / 132 // Same ratio for thumbnails
    }
  },
  computed: {
    mainImageWidth() {
      return this.$el ? this.$el.clientWidth : 671
    },
    mainImageHeight() {
      return this.mainImageWidth / this.mainImageRatio
    },
    thumbnailWidth() {
      // Set a thumbnail width relative to main image width
      return Math.min(this.mainImageWidth / 4, 150) // Or another logic
    },
    thumbnailHeight() {
      return this.thumbnailWidth / this.thumbnailRatio
    },
    currentThumbnails() {
      return this.images.filter((image) => image.id !== this.currentIndex)
    }
  },
  methods: {
    changeImage(id) {
      this.currentIndex = id
    }
  },
  mounted() {
    const temp = import.meta.glob('@/assets/carousel-images/image*', { eager: true })
    let j = 0
    for (const i in temp) {
      this.images.push({ id: j, name: i })
      j++
    }
  }
}
</script>

<style scoped lang="scss">
.carousel {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 22px;

  &__main {
    display: flex;
    position: relative;
    justify-content: end;

    &__image {
      width: 640px;
      height: 640px;
    }

    &__discount {
      display: flex;
      flex-direction: column;
      gap: 8px;
      border-radius: 50%;
      width: 216px;
      height: 216px;
      background-color: $green-1;
      justify-content: center;
      align-items: center;
      z-index: 2;
      position: absolute;
      top: -26px;
      right: -14px;

      &__title {
        font-size: $discount-title-size;
        color: $white;
        font-weight: 700;
      }

      &__subtitle {
        font-size: $discount-subtitle-size;
        color: $white;
        font-weight: 400;
      }
    }
  }

  &__thumbnails {
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    &__item {
      display: flex;
      justify-content: center;
      border: 1px solid $green-1;
      border-radius: 14px;
      overflow: hidden;

      &__image {
        border-radius: 14px;
        object-fit: cover;
        width: 180px;
        height: 180px;
      }
    }
  }
}
</style>
