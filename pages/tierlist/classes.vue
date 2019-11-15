  <template>
    <page-template :tiers="tiers">
      <template v-slot:tiers>
        <tier-block v-for="(tier, index) in tiers" :key="index" :tier="tier">
          <template v-slot:content>
            <origin-icon
              v-for="origin in tierlist.classes[index + 1]"
              :key="origin"
              :origin="classes[origin]"
            />
          </template>
        </tier-block>
      </template>
      
    </page-template>
  <!-- <div class="tierlist-page page">
    <div class="tierlist-page__inner inner">
      <div class="tierlist-page__sidebar sidebar">
        <page-heading>
          <template v-slot:text>Lists</template>
        </page-heading>
        <divider />
        <tierlist-side-navbar />
        <divider />
        <disclaimer />
      </div>
      <div class="tierlist-page__main">
        <page-heading>
          <template v-slot:text>Teamfight Tactics Class Tier List</template>
          <template v-slot:content>
            <search-bar />
          </template>
        </page-heading>
        <divider></divider>
        <div class="tierlist-page__tierlist">
          <tier-block v-for="(tier, index) in tiers" :key="index" :tier="tier">
            <template v-slot:tier>{{tier}}</template>
            <template v-slot:content>
              <origin-icon
                v-for="origin in tierlist.classes[index + 1]"
                :key="origin"
                :origin="classes[origin]"
              />
            </template>
          </tier-block>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import PageTemplate from '@/components/templates/PageTemplate.vue'
import TierBlock from '@/components/molecules/pages/TierBlock.vue'

import { mapState } from 'vuex'

export default {
  data() {
    return {
      tiers: ['s', 'a', 'b', 'c', 'd']
    }
  },
  components: {
    PageTemplate,
    TierBlock
  },
  computed: mapState(['classes', 'tierlist'])
}
</script>

<style lang="scss" scoped>
.tierlist-page {
  &__main {
    width: calc(100% - 30rem);
    padding: 0 0 0 3rem;
    border-left: 1px solid $border-color;
  }
}
</style>