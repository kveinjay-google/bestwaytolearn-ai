/* JA overlays — devices */
(function () {
  if (typeof I18n === 'undefined') return;
  I18n.mergeLocaleData('ja', {
    deviceOsCompare: {
        windows: {
          title: "ローカル LLM、Stable Diffusion、または ComfyUI には NVIDIA GPU が必要です",
          tagline: "最も幅広い互換性と最も成熟したローカル AI エコシステム",
          chooseWhen: [
            "ローカル LLM、Stable Diffusion、または ComfyUI には NVIDIA GPU が必要です",
            "職場や学校は Office、CAD、または業界向け Windows ソフトウェアで実行されます",
            "デスクトップを構築し、時間をかけて RAM と GPU をアップグレードしたい",
            "AAA ゲームをプレイしていて、同じマシンで AI の実験をしたいと考えている",
            "主に iOS/macOS アプリを出荷しています (最終ビルドには Mac が必要です)"
          ],
          avoidWhen: [
            "主に iOS/macOS アプリを出荷しています (最終ビルドには Mac が必要です)",
            "Final Cut Pro や Logic Pro などの Apple 専用アプリに依存している",
            "静音性、バッテリー寿命、洗練されたモバイル エクスペリエンスを優先する"
          ],
          aiNote: "Ollama、LM Studio、および Stable Diffusion WebUI には、Windows 上で最も多くのチュートリアルと最もスムーズなドライバーが含まれています。 RTX カードはローカル AI にとって価値のある選択です。"
        },
        macos: {
          title: "macOS",
          tagline: "洗練されたエクスペリエンス、シームレスな Apple エコシステム、軽量ローカル モデル用の統合メモリ",
          chooseWhen: [
            "すでに iPhone/iPad を使用していて、AirDrop、Handoff、iCloud を 1 つのフローで利用したい",
            "iOS/macOS 開発を行うか、Final Cut Pro でビデオを編集する",
            "主にクラウド AI と軽量ローカル モデルを使用します (例: Ollama 7B quant)",
            "バッテリー、静音性、モバイル作業を重視し、プレミアムを受け入れる",
            "ドライバーの手間を最小限に抑え、すぐに使える真の学習セットアップが必要な場合"
          ],
          avoidWhen: [
            "CUDA または多くの NVIDIA 専用 AI ツールが必要です",
            "ローカルの 300 億以上のモデルまたは LoRA トレーニングが必要 (メモリコストが高い)",
            "Apple Silicon ユニファイド メモリは VRAM として機能します。13B の場合は 36GB、34B クォントの場合は 64GB、70B クラスのローカル推論や大量のクリエイティブな作業には 128 ～ 512GB (Mac Studio/Pro) が快適です。 CUDA は使用しません。Ollama、MLX、LM Studio を推奨します。",
            "Windows 専用のプロフェッショナル ソフトウェアに依存している"
          ],
          aiNote: "Apple Silicon ユニファイド メモリは VRAM として機能します。13B の場合は 36GB、34B クォントの場合は 64GB、70B クラスのローカル推論や大量のクリエイティブな作業には 128 ～ 512GB (Mac Studio/Pro) が快適です。 CUDA は使用しません。Ollama、MLX、LM Studio を推奨します。"
        }
      },
      deviceMemoryTiers: [
        {
          level: "推奨されません",
          suitable: "Web ブラウジングと単一タスクの事務作業のみ",
          aiUse: "クラウド AI はほとんど使えません。 Chrome + ChatGPT で多くのタブを使用するとカクつきます",
          verdict: "AI を学習するには 2026 年のフロアではもはや十分ではありません。少なくとも 16GB を購入してください。新しい 8GB マシンを購入しないでください。"
        },
        {
          level: "クラウド AI を主なパスとして、オフィス ライティング、ライト コーディング",
          suitable: "クラウド AI を主なパスとして、オフィス ライティング、ライト コーディング",
          aiUse: "ChatGPT/Claude Web アプリとデスクトップ アプリはスムーズに動作します。オラマ 3B ～ 7B は可能だが遅い",
          verdict: "ほとんどの学習者にとって良いスタートです。このサイトの約 90% には個別の GPU は必要ありません。"
        },
        {
          level: "強くお勧めします",
          suitable: "AI 支援コーディング、複数のプロジェクト、ローカル 7B ～ 13B モデル",
          aiUse: "カーソル + ブラウザ + ローカル モデルをストレスなく連携できます。量子化された 13B は実行可能です",
          verdict: "AI や実際のプロジェクトに真剣に取り組んでいる場合は、32 GB が最も価値の高い「後悔しない」選択です。"
        },
        {
          level: "プロエントリー",
          platform: "MacBook Pro M3 Max・Windowsワークステーション",
          suitable: "大規模な開発、4K 編集、ローカル ~30B モデル、複数の VM",
          aiUse: "34B 量子推論、ComfyUI + Cursor の併用、多数の Docker サービスの並列化",
          verdict: "プロの原点。 Mac 64GB ユニファイド メモリは、大容量 VRAM ラップトップのように動作します。 Windows デスクトップは後で 128GB まで拡張できます。"
        },
        {
          level: "フラッグシップワークステーション",
          platform: "Mac Studio M2/M3 Ultra・ハイエンドWindowsワークステーション",
          suitable: "70B クラスのローカル モデル、長時間にわたる AI ビデオ作業、多数の並行プロジェクト、小規模チームの開発環境",
          aiUse: "70B 量子推論、マルチモーダル LLM、バッチ画像/ビデオ生成、一度に 2 ～ 3 個の中型モデル",
          verdict: "最高級のクリエイティブ"
        },
        {
          level: "最高級のクリエイティブ",
          platform: "Mac Studio / Mac Pro (BTO) ・ Threadripper ワークステーション",
          suitable: "非常に長いコンテキストの実験、モデルの切り替え、8K 映像 + AI エフェクト、ローカルの知識ベース クラスター",
          aiUse: "70B の重いクオント + エンベディング モデル + SD/FLUX ワークフローを統合 - スタジオ全体に 1 台のマシン",
          verdict: "コンテンツファクトリー/エンジニアの予算。 Mac 256GB は通常 BTO のみです。注文する前に、後でアップグレードできないことを確認してください。"
        },
        {
          level: "エクストリームスペック",
          platform: "Mac Pro M2 Ultra 最大構成 · サーバークラスのワークステーション",
          suitable: "研究ラボ、フィルムポスト、AIエンジニアリングチーム、オンプレミスのプライベートLLM展開",
          aiUse: "マルチユーザー/マルチモデルの並列処理、巨大なコンテキスト、軽い微調整実験、大規模なメディア ライブラリ上のリアルタイム AI",
          verdict: "これを必要とする人はほとんどいません。ほとんどの学習者は 32 ～ 64 GB で問題ありません。 512GB は、「私のデスクがデータセンターである」シナリオ用です。"
        }
      ],
      deviceGpuTiers: [
        {
          tier: "統合型 / 個別 GPU なし",
          forWho: "クラウド専用AI学習、事務作業、ライティング",
          canDo: "ChatGPT、クロード、キミ、Midjourney Web、Notion AI",
          cannotDo: "スムーズなローカル SD 画像生成、13B+ モデル推論、CUDA トレーニング",
          examples: "Intel統合グラフィックス、AMD Radeon iGPU、MacBook Air M2/M3",
          verdict: "ここのほとんどのコースには個別の GPU は必要ありません。代わりに 32GB RAM にお金を使いましょう。"
        },
        {
          tier: "エントリーディスクリートGPU",
          forWho: "ローカルAIと光画像生成を試す学習者",
          canDo: "低解像度の SD 1.5、Ollama 7B quant、基本的な LoRA 推論",
          cannotDo: "フルプレシジョン FLUX、70B モデル、大規模トレーニング",
          examples: "RTX 3050 6GB、RTX 4050 6GB、RTX 4060 ラップトップ 8GB",
          verdict: "ローカル AI への入場チケット。デスクトップを好みます。ラップトップのサーマルは持続的な負荷を制限します。"
        },
        {
          tier: "ミッドレンジのディスクリート GPU",
          forWho: "AI サイドギグ、毎日のイメージ生成、ローカル開発とデバッグ",
          canDo: "SDXL、量子化された FLUX、13B モデル、ComfyUI ワークフロー、ライト微調整",
          cannotDo: "70B のフル精度、マルチ GPU トレーニング",
          examples: "RTX 4060 Ti 16GB、RTX 4070 12GB、RTX 4070 ラップトップ",
          verdict: "ローカル AI の価値のスイート スポット。 The 4060 Ti 16GB is especially strong for image gen + models together."
        },
        {
          tier: "ハイエンドのディスクリート GPU",
          forWho: "AIエンジニア、ヘビークリエイター、小規模研修",
          canDo: "34B ～ 70B の量子推論、ローカルビデオ生成テスト、LoRA トレーニング、複数のモデルの並列",
          cannotDo: "大規模な商用トレーニング (依然としてクラウド/A100 クラスターが必要)",
          examples: "RTX 4080 16GB、RTX 4090 24GB、RTX 5090",
          verdict: "シングル GPU ローカル AI の上限。予算がしっかりしていて、地元の道に全力で取り組む場合に限ります。"
        },
        {
          tier: "Apple ユニファイド メモリ",
          forWho: "Macユーザー、モバイルワーク、軽量ローカルモデル",
          canDo: "CUDA エコシステム、NVIDIA 専用に最適化されたツール、コスト効率の高い大容量 VRAM",
          cannotDo: "CUDA エコシステム、NVIDIA 専用に最適化されたツール、コスト効率の高い大容量 VRAM",
          examples: "M3 24GB、M3 Pro 36GB、M3 Max 64GB、Studio Ultra 128 ～ 192GB、Mac Pro 256 ～ 512GB",
          verdict: "36GB ≈ 快適な 13B; 64GB ≈ 34B; 128GB+ は 70B 量に達します。メモリは VRAM です。購入前に設定してください。"
        }
      ],
      deviceStorageTiers: [
        {
          verdict: "クラウドのみのユーザーのみ。 OS + アプリはすぐに容量を埋めてしまいますが、お勧めしません。"
        },
        {
          verdict: "エントリーでの使用には問題ありません。少数の AI アプリでは余裕がほとんどないため、頻繁なクリーンアップが必要です。"
        },
        {
          verdict: "ローカル モデル ライブラリ、4K メディア、複数の VM - 作成者とエンジニアのデフォルト。"
        },
        {
          verdict: "ローカル モデル ライブラリ、4K メディア、複数の VM - 作成者とエンジニアのデフォルト。"
        }
      ],
      deviceAiBoxes: {
        "dgx-spark": {
          title: "NVIDIA DGX スパーク",
          budget: "約。 3,150 ～ 4,570 ドル",
          form: "デスクトップ型AIスパコンボックス（150×150×50mm）",
          os: "NVIDIA DGX OS (Linux)",
          bestFor: "デスク上にローカル エージェントと大規模なモデルを配置したい AI エンジニア、研究者、開発者",
          tradeoff: "Arm アーキテクチャと比較的クローズド スタック - 一部の x86/Windows ツールは移植が必要です。主要市場以外では可用性とサポートが異なります。価格上昇後、DIY RTX 5090 ビルドと価値を比較してください。",
          vsDiy: "DIY 128GB ワークステーションとの比較: DGX Spark は小型で、完全なソフトウェア スタックが同梱されており、すぐに大規模なモデルを実行できます。自作の Windows/Linux デュアル GPU リグには、より多くの CUDA チュートリアルと、長期にわたるいじくり用の交換可能な GPU が含まれています。",
          specs: {
            chip: "GB10: 20 コア Arm + Blackwell GPU、第 5 世代 Tensor コア",
            memory: "128 GB LPDDR5x ユニファイド メモリ (共有 CPU/GPU)",
            storage: "4 TB NVMe M.2 (自己暗号化)",
            aiCompute: "最大 1 PFLOP (FP4)。 ConnectX-7 200Gbps",
            networking: "10GbE + Wi-Fi 7;デュアルユニットリンクは最大 405B クラスのモデルまで拡張可能"
          },
          capabilities: {
            inference: "単一ユニット: 最大 ~200B パラメータ",
            finetune: "最大約 70B のパラメータを微調整",
            agents: "プリインストールされた NIM、TensorRT、NemoClaw/OpenShell エージェント スタック"
          },
          reasoning: [
            "「世界最小の AI スーパーコンピューター」として位置付けられています。机上で 1.2 kg、最大 240 W、フルタワーよりもはるかに静かです。",
            "128 GB のユニファイド メモリは、コンシューマ GPU のオフロード ダンスを行わずにモデルの重み全体をロードします",
            "DGX OS + NVIDIA AI スタックは初回起動時に準備完了 - CUDA/ドライバー/コンテナーのセットアップをスキップ",
            "DGX Cloud またはデータセンターに移行する前のプロトタイピング、微調整、推論に適しています。"
          ],
          oemVariants: []
        },
        "gb10-oem": {
          title: "GB10 OEM エコシステム (同じチップ)",
          budget: "約。 3,150～5,000ドル",
          form: "ブランドの AI ミニ ワークステーション",
          os: "DGX OS またはベンダーがカスタマイズした Linux",
          bestFor: "GB10 コンピューティングを必要としているが、エンタープライズ調達とブランド サポートを好むチーム",
          tradeoff: "構成と価格は大きく異なります。購入前に NVIDIA AI ソフトウェアの完全なライセンスを確認してください。必ずしもファーストパーティの DGX Spark より安いわけではありません。",
          vsDiy: "これまたは DGX Spark のいずれかを選択します。両方を使用する必要はありません。すでに IT ベンダーと契約している場合は、まず OEM に問い合わせてください。個々の開発者は通常、DGX Spark の方が簡単だと感じます。",
          specs: {
            chip: "DGX Spark と同じ GB10 スーパーチップ",
            memory: "128 GB ユニファイド メモリ",
            storage: "2 ～ 4 TB NVMe (ブランドによって異なります)",
            aiCompute: "DGX Spark と同じクラス、~1 PFLOP FP4",
            networking: "ほとんどの製品には高速イーサネットが含まれています。一部のモデルはより豊富な拡張を提供します"
          },
          capabilities: {
            inference: "DGX Spark と同じ、最大 200B パラメータ",
            finetune: "~70B パラメータの微調整",
            agents: "NVIDIA AI Enterprise / NIM サポートはベンダー バンドルに依存します"
          },
          reasoning: [
            "コンピューティングは DGX Spark と一致します。違いは、シャーシ冷却、ポート、保証、プレインストール サービスです。",
            "コンピューティングは DGX Spark と一致します。違いは、シャーシ冷却、ポート、保証、プレインストール サービスです。",
            "企業の購入者は標準的な IT 調達と資産管理を実行できます",
            "NVIDIA CUDA にコミットしていて、サーバー ルームを構築したくない場合に最適です"
          ],
          oemVariants: [
            "ASUS アセント GX10",
            "HP ZGX ナノ",
            "デル プロ マックス",
            "レノボ AI ワークステーション",
            "エイサー ベリトン GN100",
            "GIGABYTE AI トップアトム",
            "MSI AI デスクトップ"
          ]
        },
        "ryzen-ai-halo": {
          title: "AMD Ryzen AI Halo・128GB ミニPC",
          budget: "約。 2,000～4,000ドル",
          form: "ミニ AI PC (~193×186×77 mm)",
          os: "Windows 11 Pro / Ubuntu",
          bestFor: "DGX Spark の価格よりも安い 128GB ローカル LLM を必要とする上級学習者およびインディーズ開発者",
          tradeoff: "CUDA はありません。 PyTorch ROCm は依然として NVIDIA よりも弱いです。 RAMははんだ付けされています。サードパーティ製ミニ PC のサポートと QC はブランドによって異なります。",
          vsDiy: "DIY 128GB DDR5 デスクトップとの比較: Halo ボックスは電源管理により小型化されています。 DIY を使用すると、3 ～ 5 年以内に余裕を持って GPU の交換と RAM のアップグレードが可能になります。 vs DGX Spark: AMD は安価で Windows に優しいですが、大規模モデルのチューニングと公式スタックは完全ではありません。",
          specs: {
            chip: "16 コア / 32 スレッド Zen 5、最大 5.1 GHz。 50 トップス NPU",
            memory: "64 / 128 GB LPDDR5X 8000 MHz はんだ付けユニファイド メモリ",
            storage: "2 ～ 4 TB PCIe 4.0 SSD。デュアル M.2 最大 16 TB まで拡張可能",
            aiCompute: "Radeon 8060S 40CU RDNA 3.5; SoC 全体 ~126 TOPS",
            networking: "2.5GbE + Wi-Fi 7 + デュアル USB4"
          },
          capabilities: {
            inference: "128GB モデル: 70B クォント、Qwen3 235B クォント、Llama4 109B など",
            finetune: "軽い LoRA は実現可能です。大規模なトレーニングは依然としてクラウドに属します",
            agents: "OpenClaw、ローカルナレッジベース、LM Studio / Ollama"
          },
          reasoning: [
            "AMD の Ryzen AI Halo シリーズ - Strix Halo は、CPU、iGPU、NPU、および大容量メモリをミニ シャーシに詰め込みます",
            "GMKtec EVO-X2 や Geekom A9 Max などの 128GB 構成は ~2,000 ドル程度で、GB10 ボックスをはるかに下回ります。",
            "すぐに使える Windows。 Ollama / LM Studio / llama.cpp はすぐに採用されます",
            "RDNA iGPU はゲームや軽い ComfyUI イメージ作業も処理します - 1 台のマシンで多くの役割を果たします"
          ],
          oemVariants: [
            "GMKテック EVO-X2",
            "ギーコム A9 マックス",
            "Minisforum およびその他の Strix Halo モデル"
          ]
        },
        "dual-dgx-spark": {
          title: "デュアル DGX Spark クラスター",
          budget: "約。 6,300～9,150ドル",
          form: "デスクトップ ユニット 2 台 + 高速インターコネクト",
          os: "NVIDIA DGX OS",
          bestFor: "研究グループ、AI ネイティブのスタートアップ、クラウドを使用しない巨大なローカル モデルを必要とするエッジ ケース",
          tradeoff: "総コストはハイエンド Mac Pro に近づきます。あなたはまだクラスター ソフトウェアを維持していますが、これは個々の学習者の ~99% にとっては過剰な作業です。",
          vsDiy: "4×4090 サーバーと比較: デュアル Spark はより静かで、消費電力が低く、デスクに優しいです。マルチ GPU x86 リグは、より高いトレーニング スループットと成熟した中古 GPU 市場を提供します。",
          specs: {
            chip: "ConnectX 高速ネットワーク経由でリンクされた 2 台の GB10 ユニット",
            memory: "256GBユニファイドメモリプール（128GB×2）",
            storage: "8 TB NVMe 合計 (4 TB × 2)",
            aiCompute: "FP4 を合わせて ~2 PFLOP",
            networking: "ConnectX-7 200 Gbps ノード間リンク"
          },
          capabilities: {
            inference: "最大 4,05B のパラメータ モデル推論",
            finetune: "大規模な分散微調整実験",
            agents: "マルチエージェント並列処理、非常に大規模なコンテキスト ルーティング"
          },
          reasoning: [
            "NVIDIA は 2 台の DGX Spark ユニッ​​トのリンクを正式にサポートし、単一ボックスの最大 200B の推論上限を突破します",
            "〜400B クラスの実験をカバーしながら、1 つの DGX ステーションよりもはるかに安価",
            "デスクの横にある「デスクトップ マシン ルーム」でプライベートな大規模モデルの検証が可能",
            "クラウド学習スターター"
          ],
          oemVariants: []
        }
      },
      devicePresets: {
        "cloud-starter": {
          title: "クラウド学習スターター",
          budget: "約。 570～860ドル",
          form: "ウルトラブック",
          os: "Windows または macOS",
          bestFor: "このサイトの 7 日間のパス、毎日の ChatGPT/Claude 学習、オフィス ライティングを完了する",
          reasoning: [
            "学習の最大 90% はブラウザとアプリで行われ、ローカル コンピューティングは必要ありません",
            "16 GB により、多くのタブと AI クライアントの応答性が維持されます",
            "Ultrabook は図書館、カフェなどどこにでも持ち運び可能",
            "まずは 1 ～ 2 か月分の AI ツール サブスクリプションの予算を節約します"
          ],
          tradeoff: "ローカル モデルや SD 画像生成には快適ではありません。重いマルチリポジトリのコーディングはきつく感じるかもしれません。",
          specs: {
            gpu: "統合グラフィックス"
          }
        },
        "coding-mac": {
          title: "コーディング + Apple エコシステム",
          budget: "約。 1,290 ～ 2,000 ドル",
          form: "MacBook Air/Pro",
          os: "macOS",
          bestFor: "カーソル開発、iOS 学習、Apple デバイスの相乗効果、メインエンジンとしてのクラウド AI",
          reasoning: [
            "M シリーズ チップはコンパイルが速く、バッテリー寿命が長いため、優れたモバイル コーディングを実現します。",
            "24 GB からは、軽い Ollama 7B 実験をサイドで実行できます",
            "iPhone/iPad によるハンドオフにより、リサーチとアプリのテストがシームレスに可能",
            "完全な Apple ツールチェーン: Final Cut、Keynote など"
          ],
          tradeoff: "1 ドルあたりの GPU コンピューティングは、同じ価格の Windows に遅れをとります。 CUDA ツールは使用できません。",
          specs: {
            ram: "24 ～ 36 GB のユニファイド メモリ",
            gpu: "統合グラフィックス (ユニファイド メモリ)",
            storage: "AI コーディングの主力製品"
          }
        },
        "coding-win": {
          title: "AI コーディングの主力製品",
          budget: "Windowsノートパソコン/コンパクトデスクトップ",
          form: "Windowsノートパソコン/コンパクトデスクトップ",
          os: "Windows 11",
          bestFor: "カーソル、VS Code、Docker、マルチリポジトリ AI 支援開発",
          reasoning: [
            "AI コーディングでは 32 GB が「後悔しない」ラインです - 多くのリポジトリ + ブラウザ + AI を合わせて",
            "Windows はエンタープライズ開発環境と多様な CLI ツールに適合します",
            "オプションの RTX 4050 構成により、軽量ローカル モデル機能が追加されます",
            "ディスクリート GPU バージョンはより重く、より高価です。統合されたグラフィックスはローカル AI を制限します。"
          ],
          tradeoff: "ディスクリート GPU バージョンはより重く、より高価です。統合されたグラフィックスはローカル AI を制限します。",
          specs: {
            gpu: "統合グラフィックスまたは RTX 4050"
          }
        },
        "local-ai": {
          title: "ローカル AI ワークステーション",
          budget: "約。 1,710 ～ 2,570 ドル",
          form: "Windowsデスクトップ/ゲーミングノートPC",
          os: "Windows 11",
          bestFor: "RTX 4060 Ti 16GB は 2026 年のローカル AI バリュー キングであり、SDXL および 13B に十分な VRAM を備えています",
          reasoning: [
            "RTX 4060 Ti 16GB は 2026 年のローカル AI バリュー キングであり、SDXL および 13B に十分な VRAM を備えています",
            "32 GB のシステム RAM により、モデルをロードするときに余裕が生まれます",
            "デスクトップの冷却効果が向上 - スロットルなしで推論を継続",
            "同様のコンピューティングでは Mac よりも安価です。 CUDA チュートリアルはどこにでもあります"
          ],
          tradeoff: "約。 2,570 ～ 4,290 ドル"
        },
        "creator-pro": {
          title: "約。 2,570 ～ 4,290 ドル",
          budget: "約。 2,570 ～ 4,290 ドル",
          form: "MacBook Pro / Windowsクリエイターノートパソコン",
          os: "macOS / Windows",
          bestFor: "AIビデオ、バッチ画像生成、ポッドキャスト編集、70Bクラスのローカルモデル実験",
          reasoning: [
            "64 GB からは 34B quant を実行できます。 128 GB Studio Ultra は最大 70B のローカル推論に達します",
            "モデル ウェイト、メディア ライブラリ、プロジェクト アーカイブ用に 2 TB",
            "Mac では、3 年間の期間に合わせてメモリを構成します。後でアップグレードする必要はありません。 Windows の場合は、RTX 4070+ を選択してください",
            "ここで学んだことをコンテンツやデザインの副収入に変えましょう"
          ],
          tradeoff: "値段が高い。初心者は、購入する前にクラウドの方向性を検証する必要があります。",
          specs: {
            ram: "高メモリ統合 / RTX 4070+",
            gpu: "高メモリ統合 / RTX 4070+"
          }
        },
        "desktop-value": {
          title: "デスクトップの価値構築",
          budget: "約。 $1,140–1,710",
          form: "DIYデスクトップ",
          os: "Windows 11",
          bestFor: "予算は限られていますが、完全なローカル AI テイストで、後でアップグレードする余地があります",
          reasoning: [
            "デスクトップは 1 ドル当たりのコンピューティング能力が最も高くなります。 GPUとRAMはアップグレード可能",
            "RTX 4060 8GB はエントリー SD および 7B モデルに十分です",
            "32 GB RAM は 64 GB まで拡張可能で、寿命が 3 ～ 5 年延長されます",
            "ComfyUI と Ollama の実験による固定家庭学習に最適"
          ],
          tradeoff: "モバイルではありません。組み立てとメンテナンスのノウハウが役に立ちます。"
        },
        "luxury-mbp": {
          title: "モバイルフラッグシップ・MacBook Pro",
          budget: "約。 6,430～9,710ドル",
          form: "MacBook Pro 16インチ",
          os: "macOS",
          bestFor: "34B ～ 70B の外出先での実験、モバイル編集、旅行中のデモ",
          reasoning: [
            "128 GB は今日の MacBook のメモリの上限であり、バッグの中に AI ラボ全体が収まります",
            "M4 Max は強力なシングルコアおよびマルチコアです。カーソル + ファイナル カット + Ollama を組み合わせても問題ありません",
            "頻繁に飛行機に乗り、多くの都市で働く創業​​者やクリエイティブ ディレクター向けに構築",
            "自宅に Pro Display XDR を追加すると、デスク ワークステーションになります"
          ],
          tradeoff: "非常に高いプレミアム。サーマルは依然としてデスクトップに及ばず、70B を長時間実行するとスロットルが発生します。",
          specs: {
            ram: "64 ～ 128 GB のユニファイド メモリ",
            gpu: "統合グラフィックス (ユニファイド メモリ)",
            storage: "2～4TB SSD"
          }
        },
        "luxury-studio": {
          title: "デスクトップのフラッグシップ・Mac Studio Ultra",
          budget: "約。 $11,430–17,140",
          form: "マックスタジオ",
          os: "macOS",
          bestFor: "パーソナル AI クリエイティブ スタジオ、70B ローカル推論、静かなハイスペック デスクトップ",
          reasoning: [
            "128 GB は、ほとんどの AI プロにとって Apple の「究極のスイートスポット」です。Mac Pro の価格を除くと 700 億個になります",
            "小型でほぼ無音のシャーシ - 水冷タワーと比較して卓上に設置してもエレガント",
            "MLX + Ollama エコシステムは、Apple を頻繁に使用する家庭向けに成熟しています",
            "Mac Pro よりもはるかに安価でローカル AI ユースケースの約 90% をカバー"
          ],
          tradeoff: "メモリとストレージはBTOで固定です。 CUDA がありません。一部の調査ツールには回避策が必要です。",
          specs: {
            ram: "128 ～ 192 GB のユニファイド メモリ",
            gpu: "統合グラフィックス (60 コア GPU)",
            storage: "2～4TB SSD"
          }
        },
        "luxury-macpro": {
          title: "アップル天井・Mac Pro",
          budget: "約。 25,700 ～ 64,300 ドル",
          form: "Mac Pro タワー",
          os: "macOS",
          bestFor: "512 GB のユニファイド メモリはコンシューマ デバイスの中でもユニークで、複数の大型モデルが同時に常駐します。",
          reasoning: [
            "512 GB のユニファイド メモリはコンシューマ デバイスの中でもユニークで、複数の大型モデルが同時に常駐します。",
            "クラウドは拒否するがデータセンタークラスの RAM が必要なチーム向け",
            "After Effects + ComfyUI + ローテーションのローカル 70B アシスタント",
            "Apple のエコシステム内のステータス シンボル - 棚の装飾ではなく、実際のスループットを備えたもの"
          ],
          tradeoff: "256 ～ 512 GB のユニファイド メモリ",
          specs: {
            ram: "256 ～ 512 GB のユニファイド メモリ",
            gpu: "統合グラフィックス (76 コア GPU)",
            storage: "4～8TB SSD"
          }
        },
        "luxury-dual-gpu": {
          title: "デュアル GPU ビースト・NVIDIA ワークステーション",
          budget: "約。 11,430 ～ 25,700 ドル",
          form: "フルタワー型ワークステーション",
          os: "Windows 11 / Linux",
          bestFor: "CUDA パワー ユーザー、LoRA トレーニング、マルチ ComfyUI パイプライン、ローカル モデルの微調整",
          reasoning: [
            "デュアル 4090 = 48 GB VRAM プール - 単一カードの約 2 倍の並列 SDXL/FLUX ワークフロー",
            "128 GB システム RAM + 大容量 VRAM は Windows ローカル AI のハード シーリングです",
            "Ollama、ComfyUI、PyTorch のチュートリアルがここで最も充実しており、エンジニアのお気に入りです",
            "GPU を交換し、後で RAM を拡張 - Apple よりも「いじりやすい」"
          ],
          tradeoff: "騒々しく、電力を大量に消費し、机がいっぱいになります。ドライバーと環境には継続的なケアが必要です。",
          specs: {
            gpu: "2× RTX 4090 24GB または 2× RTX 5090",
            storage: "4TB NVMe RAID"
          }
        },
        "luxury-apple-win": {
          title: "デュアルセットアップ・Mac + Windows",
          budget: "約。 21,430 ～ 40,000 ドル",
          form: "Mac Studio + Windows タワー",
          os: "macOS + Windows",
          bestFor: "Apple の日常体験と完全な CUDA を求める究極のユーザー",
          reasoning: [
            "Mac は毎日のクリエイティブな作業、モビリティ、Final Cut、MLX ライト推論を処理します。",
            "Windows タワーは ComfyUI バッチ、CUDA トレーニング、ゲームを実行します",
            "NAS または 10GbE LAN はモデルとメディアを共有します - 重複ではなく相補的です",
            "本物の AI スタジオはどれくらいあるのか: 1 台のオムニマシンではなく、明確な分業体制"
          ],
          tradeoff: "総コストが最も高い。ケーブルと同期のオーバーヘッドは、ほとんどの人が必要とするものをはるかに超えています。",
          specs: {
            ram: "128GB + 128GB",
            gpu: "Apple 統合 + RTX 4090",
            storage: "各4TB"
          }
        }
      },
      deviceSubsections: {
        needs: {
          title: "①主なユースケースから始める",
          desc: "最も近いオプションを選択してください。以下の一致するプリセットが自動的に強調表示されます。"
        },
        os: {
          title: "②WindowsかmacOSか？",
          desc: "どちらが一般的に優れているというわけではありません。ソフトウェア エコシステムと AI ロードマップに合わせてください。"
        },
        memory: {
          title: "③RAMはどれくらいですか？",
          desc: "RAM は AI マルチタスクの最初のレバーです。 Windows RAM は後で拡張できます。 Apple Silicon はユニファイド メモリ (RAM = VRAM) を使用します。 Mac Studio/Pro は 128 ～ 512 GB を提供します。"
        },
        gpu: {
          title: "④ GPU 層は何ですか?",
          desc: "クラウドのみの学習者は個別の GPU を無視できます。ローカルのイメージ生成とモデルには大量の VRAM が必要です。"
        },
        storage: {
          title: "⑤ ストレージ容量",
          desc: ""
        },
        aiBoxes: {
          title: "⑥専用のAI計算ボックス",
          desc: ""
        },
        presets: {
          title: "⑦ 推奨構成",
          desc: "エントリから <strong>no-compromise builds</strong> まで — 高速にフィルタリングするには、上の「No-compromise」を選択します。それぞれが、誰を対象とするのか、このように構成されている理由、およびトレードオフについて説明します。"
        }
      },
      deviceFieldLabels: {
        chooseWhen: "いつ選択するか",
        avoidWhen: "いつスキップするか",
        aiNotePrefix: "AI 学習のヒント:",
        commonModels: "一般的なモデル:",
        suitable: "以下に最適:",
        aiCapability: "AI 機能:",
        recommendedApps: "おすすめのアプリ",
        forWho: "以下に最適:",
        canDo: "できること:",
        cannotDo: "ハードウェアの例:",
        examples: "ハードウェアの例:",
        ram: "メモリ",
        gpu: "GPU",
        storage: "ストレージ",
        needResultPrefix: "推奨される焦点:",
        needResultEmpty: "まだ何もありません",
        weekN: "{n}週",
        focusThisWeek: "今週は集中して",
        practice1: "練習1",
        practice2: "練習2"
      }
  });
})();
