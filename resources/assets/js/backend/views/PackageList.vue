<template>
  <div>
    <b-card>
      <template slot="header">
        <h3 class="card-title">{{ $t('labels.backend.packages.titles.index') }}</h3>
        <!-- <div class="card-options" v-if="this.$app.user.can('create posts')">
          <b-button to="/posts/create" variant="success" size="sm">
            <i class="fe fe-plus-circle"></i> {{ $t('buttons.posts.create') }}
          </b-button>
        </div> -->
      </template>
      <b-datatable ref="datasource"
                   @context-changed="onContextChanged"
                   search-route="admin.packages.search"
                   delete-route="admin.packages.destroy"
                   action-route="admin.packages.batch_action" :actions="actions"
                   @bulk-action-success="onBulkActionSuccess">
        <b-table ref="datatable"
                 striped
                 bordered
                 show-empty
                 stacked="md"
                 no-local-sorting
                 :empty-text="$t('labels.datatables.no_results')"
                 :empty-filtered-text="$t('labels.datatables.no_matched_results')"
                 :fields="fields"
                 :items="dataLoadProvider"
                 sort-by="posts.created_at"
                 :sort-desc="true"
                 :busy.sync="isBusy"
        >
          <template slot="HEAD_checkbox" slot-scope="data"></template>
          <template slot="checkbox" slot-scope="row">
            <b-form-checkbox :value="row.item.id" v-model="selected"></b-form-checkbox>
          </template>
          <!-- <template slot="image" slot-scope="row">
            <router-link v-if="row.item.can_edit" :to="`/posts/${row.item.id}/edit`">
              <img :src="row.item.thumbnail_image_path" :alt="row.item.title">
            </router-link>
            <img v-else :src="row.item.thumbnail_image_path" :alt="row.item.title">
          </template> -->
          <template slot="display_name" slot-scope="row">
            <router-link v-if="row.item.can_edit" :to="`/posts/${row.item.id}/edit`" v-text="row.value"></router-link>
            <span v-else v-text="row.value"></span>
          </template>
          <template slot="days" slot-scope="row">
            <router-link v-if="row.item.can_edit" :to="`/posts/${row.item.id}/edit`" v-text="row.value"></router-link>
            <span v-else v-text="row.value"></span>
          </template>
          <template slot="price" slot-scope="row">
            <router-link v-if="row.item.can_edit" :to="`/posts/${row.item.id}/edit`" v-text="row.value"></router-link>
            <span v-else v-text="row.value"></span>
          </template>
          <template slot="posts.created_at" slot-scope="row">
            {{ row.item.created_at }}
          </template>
          <template slot="posts.updated_at" slot-scope="row">
            {{ row.item.updated_at }}
          </template>
          <template slot="actions" slot-scope="row">
            <!-- <b-button size="sm" variant="success" :href="$app.route('blog.show', { post: row.item.slug})" target="_blank" v-b-tooltip.hover :title="$t('buttons.preview')" class="mr-1">
              <i class="fe fe-eye"></i>
            </b-button> -->
            <b-button v-if="row.item.can_edit" size="sm" variant="primary" :to="`/posts/${row.item.id}/edit`" v-b-tooltip.hover :title="$t('buttons.edit')" class="mr-1">
              <i class="fe fe-edit"></i>
            </b-button>
            <b-button v-if="row.item.can_delete" size="sm" variant="danger" v-b-tooltip.hover :title="$t('buttons.delete')" @click.stop="onDelete(row.item.id)">
              <i class="fe fe-trash"></i>
            </b-button>
          </template>
        </b-table>
      </b-datatable>
    </b-card>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PackageList',
  data () {
    return {
      isBusy: false,
      selected: [],
      fields: [
        { key: 'checkbox' },
        // { key: 'image', label: this.$t('validation.attributes.image') },
        { key: 'display_name', label: this.$t('validation.attributes.display_name'), sortable: true },
        // { key: 'hook', label: this.$t('validation.attributes.hook'), 'class': 'text-center' },
        // { key: 'description', label: this.$t('validation.attributes.description'), 'class': 'text-center' },
        { key: 'days', label: this.$t('validation.attributes.days'), 'class': 'text-center' },
        // { key: 'departure_city', label: this.$t('validation.attributes.departure_city'), sortable: true },
        // { key: 'arrival_city', label: this.$t('validation.attributes.arrival_city'), sortable: true },
        // { key: 'departure_date', label: this.$t('validation.attributes.departure_date'), sortable: true },
        // { key: 'arrival_date', label: this.$t('validation.attributes.arrival_date'), sortable: true },
        { key: 'price', label: this.$t('validation.attributes.price'), sortable: true },
        { key: 'packages.created_at', label: this.$t('labels.created_at'), 'class': 'text-center', sortable: true },
        { key: 'packages.updated_at', label: this.$t('labels.updated_at'), 'class': 'text-center', sortable: true },
        { key: 'actions', label: this.$t('labels.actions'), 'class': 'nowrap' }
      ],
      actions: {
        destroy: this.$t('labels.backend.posts.actions.destroy'),
        publish: this.$t('labels.backend.posts.actions.publish'),
        pin: this.$t('labels.backend.posts.actions.pin'),
        promote: this.$t('labels.backend.posts.actions.promote')
      }
    }
  },
  watch: {
    selected (value) {
      this.$refs.datasource.selected = value
    }
  },
  methods: {
    dataLoadProvider (ctx) {
      return this.$refs.datasource.loadData(ctx.sortBy, ctx.sortDesc)
    },
    onContextChanged () {
      return this.$refs.datatable.refresh()
    },
    onDelete (id) {
      this.$refs.datasource.deleteRow({ package: id })
    },
    onBulkActionSuccess () {
      this.selected = []
    },
  }
}
</script>
