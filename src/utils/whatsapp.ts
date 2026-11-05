import { BRAND_INFO } from '../data/cateringData';

export function getWhatsAppUrl(type: 'menu' | 'package' | 'general' | 'custom', detail?: { name?: string; pax?: number; event?: string }): string {
  const number = BRAND_INFO.whatsappNumber;
  let text = '';

  switch (type) {
    case 'menu':
      text = `Halo ${BRAND_INFO.name}, saya tertarik dengan menu ${detail?.name || 'pilihan'}. Saya ingin mengetahui informasi harga dan ketersediaan menu tersebut.`;
      break;
    case 'package':
      text = `Halo ${BRAND_INFO.name}, saya tertarik dengan paket ${detail?.name || 'catering'}. Saya ingin konsultasi untuk pemesanan sebanyak ${detail?.pax || 10} pax.`;
      break;
    case 'custom':
      text = `Halo ${BRAND_INFO.name}, saya ingin berkonsultasi mengenai pesanan custom catering untuk acara ${detail?.event || 'spesial saya'}. Mohon informasi dan rekomendasi pilihannya.`;
      break;
    case 'general':
    default:
      text = `Halo ${BRAND_INFO.name}, saya ingin berkonsultasi mengenai layanan catering. Bisa dibantu dengan informasi lebih lanjut?`;
      break;
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
