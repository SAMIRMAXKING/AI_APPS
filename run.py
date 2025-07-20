
import os
import re

PLANS_DIR = "AI_APPS/"  

def extract_python_blocks(text):
    pattern = r"```python\n(.*?)```"
    return re.findall(pattern, text, re.DOTALL)

def execute_plan_actions(plan_text, plan_name):
    print(f"\n🔹 تنفيذ الخطة: {plan_name}")
    print("-" * 60)
    print(plan_text[:300])

    if "إنشاء مجلد" in plan_text:
        folders = [
            "project_root/src",
            "project_root/assets",
            "project_root/configs",
            "project_root/logs",
            "project_root/ai_agent"
        ]
        for folder in folders:
            os.makedirs(folder, exist_ok=True)
        print("📁 تم إنشاء المجلدات.")

    if "README.md" in plan_text:
        with open("project_root/README.md", "w", encoding="utf-8") as f:
            f.write("# مشروع ذكي تم إنشاؤه من الخطط ✅\n")
        print("📄 تم إنشاء README.md.")

    code_blocks = extract_python_blocks(plan_text)
    for i, code in enumerate(code_blocks, 1):
        print(f"\n⚙️ تنفيذ كود Python رقم {i}...")
        try:
            exec(code, globals())
            print("✅ تم التنفيذ.")
        except Exception as e:
            print(f"❌ خطأ في كود {i}: {e}")

def run_all_plans(path=PLANS_DIR):
    if not os.path.exists(path):
        print(f"❌ لم يتم العثور على مجلد الخطط: {path}")
        return

    files = sorted(
        [f for f in os.listdir(path) if f.endswith(".txt")],
        key=lambda name: int(re.findall(r"\d+", name)[0])
    )

    for file in files:
        file_path = os.path.join(path, file)
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
            execute_plan_actions(content, file)

if __name__ == "__main__":
    run_all_plans()
