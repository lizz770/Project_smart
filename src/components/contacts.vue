<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
      offset-sm="3"
    >
      <v-card>
        <v-list two-line>
          <template v-for="(item, index) in items.slice(0, 6)">
            <v-subheader
              v-if="item.header"
              :key="item.header"
            >
              {{ item.header }}
            </v-subheader>
            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"
            ></v-divider>
            <v-list-item
              v-else
              :key="item.title"
            >
              <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import {
    mdiEmail
  } from '@mdi/js'
  export default {
    data: () => ({
      items: [
        { header: 'Контакты' },
        { title: 'Почта', subtitle: `<span class="font-weight-bold">aaaa12345@gmail.coms</span>` },
        { divider: true, inset: true },
        { title: 'Номер телефона', subtitle: `<span class="font-weight-bold">89024880896</span>` },
        { divider: true, inset: true },
        { title: 'Instagram', subtitle: '<span class="font-weight-bold">kyssska_</span>' },
      ],
    }),
  }
</script>