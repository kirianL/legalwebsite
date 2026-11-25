# Registro de Fallback de Modelos — LandingFactory

Este archivo registra activaciones de fallback y decisiones de selección de modelos gratuitos (sin credenciales ni secretos).

## 2026-11-21T05:52:27.395Z — `code-reviewer` (Perfil C)
- **Modelo principal**: `opencode/deepseek-v4.1-flash-free`
- **Error / Disparador**: `rate_limit` (intento 1)
- **Requiere visión**: No
- **Candidatos evaluados**: `opencode/deepseek-v4.1-flash-free` (excluido-por-fallo), `opencode/flint-40b-free` (compatible-gratuito (opencode-known))
- **Acción**: `USE_FALLBACK`
- **Modelo seleccionado**: `opencode/flint-40b-free`
- **Motivo**: Fallback activado desde opencode/deepseek-v4.1-flash-free hacia opencode/flint-40b-free (opencode-known).
- **Resultado**: pending
