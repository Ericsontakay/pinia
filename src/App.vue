<template>
  <v-app>
    <v-layout>
      <v-app-bar class="text-center">
        <v-app-bar-title class="text-h5 font-weight-bold">Nova ordem de serviço</v-app-bar-title>
      </v-app-bar>

      <v-main class="mt-6">
        <v-container>
          <v-row>
            <v-col>
              <h3>Organizações Tabajara</h3>
              Avenida Dom Eugênio Sales, 96 - Boca do Rio <br>
              Salvador - Bahia 41715-030 <br>
              Tel: 71 9999-9999 <br>
              E-mail: contato@tabajara.com.br
            </v-col>

            <v-col>
              <div class="d-flex justify-end mb-2">
                <v-label class="mr-2" style="width: 120px">N⁰ da OS</v-label>
                <v-text-field
                    variant="outlined"
                    density="compact"
                    type="number"
                    prepend-inner-icon="mdi-pound"
                    hide-details
                    style="max-width: 180px;"
                />
              </div>

              <div class="d-flex justify-end mb-2">
                <v-label class="mr-2" style="width: 120px">Vencimento</v-label>
                <v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                >
                  <template v-slot:activator="{ props }">
                    <v-text-field
                        v-model="date"
                        variant="outlined"
                        density="compact"
                        prepend-inner-icon="mdi-calendar"
                        hide-details
                        readonly
                        style="max-width: 180px;"
                        v-bind="props"
                    />
                  </template>

                  <v-date-picker
                      v-model="date"
                      color="primary"
                      hideHeader
                      hideWeekdays
                  ></v-date-picker>
                </v-menu>
              </div>

              <div class="d-flex justify-end">
                <v-label class="mr-2" style="width: 120px">Status da OS</v-label>
                <v-select
                    :items="['Aberto', 'Em processo', 'Fechado']"
                    placeholder="Escolha"
                    variant="outlined"
                    density="compact"
                    prepend-inner-icon="mdi-power"
                    hide-details
                    style="max-width: 180px;"
                />
              </div>
            </v-col>
          </v-row>

          <div class="mt-8">
            <h2 class="mb-2">Dados do cliente</h2>
            <v-row>
              <v-col>
                <v-text-field
                    label="Nome"
                    variant="outlined"
                    density="compact"
                    prepend-inner-icon="mdi-account"
                    hide-details
                />
              </v-col>

              <v-col>
                <v-text-field
                    label="Telefone"
                    variant="outlined"
                    density="compact"
                    prepend-inner-icon="mdi-phone"
                    hide-details
                />
              </v-col>

              <v-col>
                <v-text-field
                    label="Email"
                    variant="outlined"
                    prepend-inner-icon="mdi-email"
                    density="compact"
                    hide-details
                />
              </v-col>
            </v-row>
          </div>

          <div class="mt-8">
            <h2 class="mb-2">Dados do pedido</h2>

            <v-table>
              <thead>
              <tr>
                <th class="w-50">Descrição</th>
                <th style="width: 150px">Preço</th>
                <th style="width: 110px">Qnt.</th>
                <th class="text-right">Total</th>
              </tr>
              </thead>

              <tbody>
              <tr>
                <td>
                  <v-text-field
                      variant="outlined"
                      density="compact"
                      hide-details
                  />
                </td>

                <td>
                  <v-text-field
                      variant="outlined"
                      density="compact"
                      prefix="R$"
                      hide-details
                  />
                </td>

                <td>
                  <v-text-field
                      variant="outlined"
                      density="compact"
                      type="number"
                      hide-details
                  />
                </td>

                <td>
                  <div class="d-flex align-center justify-end">
                    <div class="text-right text-subtitle-1">
                      R$ 20
                    </div>

                    <v-btn
                        icon="mdi-trash-can-outline"
                        size="small"
                        variant="plain"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field
                      variant="outlined"
                      density="compact"
                      hide-details
                  />
                </td>

                <td>
                  <v-text-field
                      variant="outlined"
                      density="compact"
                      hide-details
                  />
                </td>

                <td>
                  <v-text-field
                      variant="outlined"
                      density="compact"
                      hide-details
                  />
                </td>

                <td>
                  <div class="d-flex align-center justify-end">
                    <div class="text-right text-subtitle-1">
                      R$ 20
                    </div>

                    <v-btn
                        icon="mdi-trash-can-outline"
                        size="small"
                        variant="plain"
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <v-text-field
                      variant="outlined"
                      density="compact"
                      hide-details
                  />
                </td>

                <td>
                  <v-text-field
                      variant="outlined"
                      density="compact"
                      hide-details
                  />
                </td>

                <td>
                  <v-text-field
                      variant="outlined"
                      density="compact"
                      hide-details
                  />
                </td>

                <td>
                  <div class="d-flex align-center justify-end">
                    <div class="text-right text-subtitle-1">
                      R$ 20
                    </div>

                    <v-btn
                        icon="mdi-trash-can-outline"
                        size="small"
                        variant="plain"
                    />
                  </div>
                </td>
              </tr>
              </tbody>
            </v-table>

            <div class="mt-4 text-right">
              <v-btn
                  color="primary"
                  variant="tonal"
              >Adicionar item
              </v-btn>
            </div>
          </div>

          <div class="mt-6">
            <v-row>
              <v-col>
                <v-textarea
                    label="Descrição da ordem de serviço"
                    hide-details
                    variant="outlined"
                />
              </v-col>

              <v-col>
                <v-card>
                  <v-table>
                    <tbody>
                    <tr>
                      <td><b>Subtotal</b></td>
                      <td class="text-right">R$ 100</td>
                    </tr>
                    <tr>
                      <td><b>Desconto</b></td>
                      <td>
                        <div class="text-right d-flex">
                          <v-text-field
                              variant="outlined"
                              density="compact"
                              hide-details
                              class="mr-2"
                          />

                          <v-select
                              variant="outlined"
                              density="compact"
                              :items="['%', 'R$']"
                              hide-details
                              style="max-width: 90px"
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td><b>Total</b></td>
                      <td class="text-right">R$ 50</td>
                    </tr>
                    </tbody>
                  </v-table>
                </v-card>
              </v-col>
            </v-row>
          </div>

          <div class="mt-8 text-right">
            <v-btn variant="text">Cancelar</v-btn>
            <v-btn color="primary">Enviar</v-btn>
          </div>
        </v-container>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup>
import {ref} from 'vue';

const menu2 = ref(false)
const date = ref(null)
</script>
