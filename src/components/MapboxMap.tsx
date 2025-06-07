/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    L: any;
  }
}

export default function MapboxMap() {
  const mapContainer = useRef<HTMLDivElement>(null)
  const mapInitialized = useRef<boolean>(false)

  useEffect(() => {
    if (mapContainer.current && !mapInitialized.current && typeof window !== 'undefined') {
      // Dynamically load Leaflet CSS and JS
      const loadLeaflet = async () => {
        // Load CSS
        if (!document.querySelector('link[href*="leaflet.css"]')) {
          const cssLink = document.createElement('link')
          cssLink.rel = 'stylesheet'
          cssLink.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
          cssLink.integrity = 'sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY='
          cssLink.crossOrigin = ''
          document.head.appendChild(cssLink)
        }

        // Load JS
        if (!window.L) {
          const script = document.createElement('script')
          script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
          script.integrity = 'sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo='
          script.crossOrigin = ''
          
          script.onload = () => {
            initializeMap()
          }
          
          document.head.appendChild(script)
        } else {
          initializeMap()
        }
      }

      const initializeMap = () => {
        if (!window.L || !mapContainer.current) return

        const container = mapContainer.current
        container.innerHTML = `
          <div class="relative w-full h-full bg-white rounded-lg shadow-lg overflow-hidden border">
            <!-- Map Header -->
            <div class="absolute top-4 left-4 right-4 z-[1000] pointer-events-none">
              <div class="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border pointer-events-auto">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <div>
                      <h3 class="font-semibold text-gray-800">I.K Advogados</h3>
                      <p class="text-xs text-gray-600">Bairro da Coop, Maputo</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-2 text-xs text-gray-500">
                    <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span>Mapa Interativo</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Map Container -->
            <div id="leaflet-map" class="w-full h-full"></div>

            <!-- Info Card -->
            <div class="absolute bottom-4 left-4 right-4 z-[1000] pointer-events-none">
              <div class="bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border p-4 max-w-sm pointer-events-auto">
                <div class="flex items-start gap-4">
                  <div class="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                    </svg>
                  </div>
                  <div class="flex-1 min-w-0">
                    <h3 class="font-semibold text-primary text-sm mb-1">I.K Advogados</h3>
                    <p class="text-gray-600 text-xs mb-2">Rua 1335, N.º 175, Bairro da Coop</p>
                    <div class="flex items-center gap-3 text-xs text-gray-500">
                      <div class="flex items-center gap-1">
                        <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Aberto</span>
                      </div>
                      <span>08:00 - 17:00</span>
                    </div>
                  </div>
                  <div class="flex flex-col gap-1">
                    <button class="w-6 h-6 bg-primary/10 hover:bg-primary/20 rounded-md flex items-center justify-center transition-colors text-primary">
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                      </svg>
                    </button>
                    <button class="w-6 h-6 bg-accent/10 hover:bg-accent/20 rounded-md flex items-center justify-center transition-colors text-accent">
                      <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `

        // Initialize Leaflet map
        setTimeout(() => {
          const mapElement = container.querySelector('#leaflet-map')
          if (mapElement && window.L) {
            // Bairro da Coop, Maputo coordinates - approximate location
            const coopLat = -25.95
            const coopLng = 32.58
            
            // Create map
            const map = window.L.map('leaflet-map', {
              zoomControl: false,
              attributionControl: false
            }).setView([coopLat, coopLng], 15)

            // Add custom zoom control
            window.L.control.zoom({
              position: 'topright'
            }).addTo(map)

            // Add custom attribution
            window.L.control.attribution({
              position: 'bottomright',
              prefix: false
            }).addAttribution('© OpenStreetMap contributors').addTo(map)

            // Add tile layer with custom styling
            window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '© OpenStreetMap contributors',
              maxZoom: 19,
              className: 'map-tiles'
            }).addTo(map)

            // Custom marker icon
            const customIcon = window.L.divIcon({
              html: `
                <div class="flex items-center justify-center w-8 h-8 bg-primary rounded-full shadow-lg border-2 border-white">
                  <svg class="w-4 h-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                  </svg>
                </div>
              `,
              className: 'custom-marker',
              iconSize: [32, 32],
              iconAnchor: [16, 16]
            })

            // Add marker
            const marker = window.L.marker([coopLat, coopLng], { 
              icon: customIcon 
            }).addTo(map)

            // Custom popup
            const popupContent = `
              <div class="p-3 min-w-[200px]">
                <h3 class="font-semibold text-primary mb-2">I.K Advogados</h3>
                <p class="text-sm text-gray-600 mb-2">Rua 1335, N.º 175, Bairro da Coop</p>
                <div class="flex items-center gap-2 text-xs text-gray-500 mb-3">
                  <div class="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Aberto: 08:00 - 17:00</span>
                </div>
                <div class="flex gap-2">
                  <button class="text-xs bg-primary text-primary-foreground px-3 py-1 rounded-md hover:bg-primary/90 transition-colors">
                    Direções
                  </button>
                  <button class="text-xs bg-accent text-accent-foreground px-3 py-1 rounded-md hover:bg-accent/90 transition-colors">
                    Contactar
                  </button>
                </div>
              </div>
            `

            marker.bindPopup(popupContent, {
              className: 'custom-popup',
              closeButton: true,
              autoPan: true
            })

            // Add circle to highlight area
            window.L.circle([coopLat, coopLng], {
              color: '#CFA94F',
              fillColor: '#CFA94F',
              fillOpacity: 0.1,
              radius: 200
            }).addTo(map)

            // Add some nearby landmarks for context
            const landmarks = [
              { lat: -25.955, lng: 32.575, name: 'Centro Comercial', color: '#ef4444' },
              { lat: -25.945, lng: 32.585, name: 'Mercado Local', color: '#10b981' },
              { lat: -25.948, lng: 32.582, name: 'Banco', color: '#3b82f6' }
            ]

            landmarks.forEach(landmark => {
              const landmarkIcon = window.L.divIcon({
                html: `<div class="w-3 h-3 rounded-full border border-white shadow-sm" style="background-color: ${landmark.color}"></div>`,
                className: 'landmark-marker',
                iconSize: [12, 12],
                iconAnchor: [6, 6]
              })

              window.L.marker([landmark.lat, landmark.lng], { 
                icon: landmarkIcon 
              }).addTo(map).bindTooltip(landmark.name, {
                permanent: false,
                direction: 'top',
                className: 'custom-tooltip'
              })
            })

            // Smooth zoom to marker on load
            setTimeout(() => {
              map.setView([coopLat, coopLng], 16, { animate: true })
            }, 1000)
          }
        }, 100)
      }

      loadLeaflet()
      mapInitialized.current = true
    }
  }, [])

  return (
    <div 
      ref={mapContainer} 
      className="w-full h-96 rounded-lg overflow-hidden"
      style={{ minHeight: '384px' }}
    />
  )
} 